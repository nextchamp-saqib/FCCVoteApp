import React, { Component } from 'react';
import axios from 'axios';

class ViewPoll extends Component {
    constructor(props) {
        super(props);
        var pollId = this.props.params.splat;
        this.state = {
            userID: JSON.parse(this.props.custom).userID,
            pollId: this.props.params.splat,
            poll: {
                userID: '',
                title: '',
                options: []
            }
        }
    }
    componentWillMount() {
        var self = this;
        var url = '/getpoll/'+ this.state.pollId;
        axios({
            method: 'get',
            url: url
        }).then(function(response){
            self.setState({
                poll: response.data[0]
            })
        }).catch(function(err){
            // console.log(err);
        })
    }
    handleRadio(e) {
        var radios = $("input:radio").not(e.target) 
        radios.prop('checked',false);
    }

    handleVote() {
        var self = this;
        var voteOption = $("input:checked").prop('value');
        var url = '/vote/' + this.state.pollId;
        axios({
            method: 'post',
            url: url,
            data: {
                userID: self.state.userID,
                voteOption: voteOption
            }
         }).then(function(response){
            if(typeof response.data == 'object')
                self.setState({
                    poll: response.data
                })
            else{
                console.log(response.data);//make changebutton
            }
         }).catch(function(err){
             console.log(err);
         });
    }
    
    render() {
        var self = this;
        var poll = this.state.poll;
        return (
            <div className="viewpoll">
                <div className="poll">
                    <div className="poll-topic">{poll.title}</div>
                    <div className="poll-author">{poll.userID}</div>
                    <div className="share-poll"><a href="/polls/view/5"><i className="fa fa-facebook"/> &nbsp;Share</a></div>
                </div>
                <div className="poll-info">
                    <div className="poll-vote">
                        <h4>Vote</h4>
                        <ul className="list-group list-group-flush">
                            {poll.options.map(function(item, id){
                                return (
                                    <li key={id} className="list-group-item">
                                        <div className="input-group">
                                            <span className="input-group-addon">
                                                <input type="radio" onChange={self.handleRadio} value={item._id} />
                                            </span>
                                            <span className="input-group-addon option">{item.option} Votes: {item.voters.length}</span>
                                        </div>
                                    </li>
                                )
                            })}
                        </ul>
                        <div className="btn-vote" onClick={self.handleVote.bind(self)}><i className="fa fa-check"/>&nbsp;Vote</div>
                    </div>
                    <div className="poll-result"><h4>Result</h4></div>
                </div>
            </div>
        );
    }
}

module.exports = ViewPoll;