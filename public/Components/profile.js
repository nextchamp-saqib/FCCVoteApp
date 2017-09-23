import React, { Component } from 'react';
import axios from 'axios';

class Profile extends Component {
    constructor(props){
        super(props);
        this.state = {
            user: {
                userID: JSON.parse(props.custom).user._id
            },
            polls: []
        }
    }

    componentDidMount() {
        var self = this;
        axios({
            method: 'get',
            url: '/getuserprofile/'+self.state.user.userID,
        }).then(function(response) {
            self.setState({
                user: {
                    userID: response.data.user._id,
                    place: response.data.user.place,
                    name: response.data.user.name,
                    contact: response.data.user.contact
                },
                polls: response.data.polls
            });
        }).catch(function(err){
            console.log(err);
        })     
    }

    mapPolls(poll, id) {
        var self = this;
        var href = "/polls/view/"+poll._id;
        return(
            <div key={id} className="poll">
                <div className="delete-poll" onClick={self.handleDelete.bind(self)} id={poll._id}><i id={poll._id} className="fa fa-2x fa-trash"/></div>
                <div className="poll-topic">{poll.title}</div>
                <div className="poll-author">{poll.userID}</div>
                <div className="view-poll"><a href={href}><i className="fa fa-list-alt"/> &nbsp;View</a></div>
                <div className="share-poll"><a href={href}><i className="fa fa-facebook"/> &nbsp;Share</a></div>
            </div>
        )
    }
    
    handleUpdate() {
        var name = this.refs.name.value
        var contact = this.refs.contact.value;
        var place = this.refs.place.value;
        var self = this;
        axios({
            method: 'post',
            url: 'profile/update/' + self.state.user.userID,
            data: {
                name : name,
                contact : contact,
                place : place
            }
        }).then(function(response){
            self.setState({
                user: {
                    userID: response.data._id,
                    place: response.data.place,
                    name: response.data.name,
                    contact: response.data.contact
                }
            });
            window.location.href = "/profile";
        }).catch(function(err){
            console.log(err);
        })
    }
    handleDelete(e) {
        axios({
            method: 'delete',
            url: '/profile/delete',
            data: {
                pollID: e.target.id
            }
        }).then(function(respone){
            if(respone.status == 200){
                window.location.href = '/profile';
            }
        })
    }
    render() {
        return (
            <div className="profile">
                <h3>Profile</h3>
                <div className="profile-img">
                    <i className="fa fa-5x fa-user"/>
                </div>
                <div className="user-info">
                    <h5>Information</h5>
                    <div className="profile-info">
                        <div className="flex">
                            <div className="label">Name:</div>
                            <div><input ref="name" type="text" placeholder={this.state.user.name}/></div>
                        </div>
                        <div className="flex">
                            <div className="label">Contact:</div>
                            <div><input ref="contact" type="number" placeholder={this.state.user.contact}/></div>
                        </div>
                        <div className="flex">
                            <div className="label">Place:</div>
                            <div><input ref="place" type="text" placeholder={this.state.user.place}/></div>
                        </div>
                        <div className="flex">
                            <button className="btn-update" onClick={this.handleUpdate.bind(this)}><i className=" fa fa-pencil-square-o"/> Update</button>
                        </div>
                    </div>
                </div>
                <div></div>
                <div className="polls-info">
                    <h5>Polls</h5>
                    <div className="polls-list">
                        {this.state.polls.map(this.mapPolls.bind(this))}
                    </div>
                </div>
            </div>
        );
    }
}

module.exports = Profile;