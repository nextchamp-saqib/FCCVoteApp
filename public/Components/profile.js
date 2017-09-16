import React, { Component } from 'react';
import axios from 'axios';

class Profile extends Component {
    constructor(props){
        super(props);
        this.state = {
            userID: JSON.parse(props.custom).user._id,
            name: JSON.parse(props.custom).user.name,
            polls: []
        }
    }

    componentWillMount() {
        var self = this;
        axios({
            method: 'get',
            url: 'http://localhost:8080/getuserpolls/'+self.state.userID,
        }).then(function(response) {
            self.setState({
                polls: response.data
            })
        }).catch(function(err){
            console.log(err);
        })     
    }

    mapPolls(poll, id) {
        var href = "/polls/view/"+poll._id;
        return(
            <div key={id} className="poll">
                <div className="poll-topic">{poll.title}</div>
                <div className="poll-author">{poll.userID}</div>
                <div className="view-poll"><a href={href}><i className="fa fa-list-alt"/> &nbsp;View</a></div>
                <div className="share-poll"><a href={href}><i className="fa fa-facebook"/> &nbsp;Share</a></div>
            </div>
        )
    }
    
    render() {
        return (
            <div className="profile">
                <h3>Profile</h3>
                <div className="profile-img">
                    <i className="fa fa-5x fa-user"/>
                </div>
                <div className="profile-name">/u/user</div>
                <div className="user-info">
                    <h5>Information</h5>
                    <div className="profile-info">
                        <div className="flex">
                            <div className="label">Name:</div>
                            <div><input id="name" type="text" /></div>
                        </div>
                        <div className="flex">
                            <div className="label">Contact:</div>
                            <div><input id="contact" type="text" /></div>
                        </div>
                        <div className="flex">
                            <div className="label">Place:</div>
                            <div><input id="place" type="text" /></div>
                        </div>
                        <div className="flex">
                            <button className="btn-update"><i className=" fa fa-pencil-square-o"/>Update</button>
                        </div>
                    </div>
                </div>
                <div></div>
                <div className="polls-info">
                    <h5>Polls</h5>
                    <div className="polls-list">
                        {this.state.polls.map(this.mapPolls)}
                    </div>
                </div>
            </div>
        );
    }
}

module.exports = Profile;