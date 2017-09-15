import React, { Component } from 'react';
import axios from 'axios';

class Polls extends Component {
    constructor(props) {
        super(props);
        this.state = {
            polls : []
        }
    };
    
    componentDidMount() {
        var self = this;
        axios({
            method: 'get',
            url: 'getpolls'
        }).then(function(response){
            self.setState({
                polls : response.data
            })
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
    componentDidUpdate(){
        console.log(this.state.polls);
    }
    renderCreateButton() {
        if(JSON.parse(this.props.custom).userAuth){
            return (
                <a className="new-poll" href="newpoll" role="button">
                    <i className="fa fa-plus"/> Create new Poll
                </a>
            )
        }else {
            return null;
        }
    }
    render() {
        return (
            <div className="polls-container">
                <h3>Current Polls</h3>
                <div className="polls">
                    {this.renderCreateButton()}
                    {this.state.polls.map(this.mapPolls)}
                </div>
            </div>
        );
    }
}

module.exports = Polls;