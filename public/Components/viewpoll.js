import React, { Component } from 'react';
import axios from 'axios';
import {Chart} from 'chart.js';

class ViewPoll extends Component {
    constructor(props) {
        super(props);
        var pollId = this.props.params.splat;
        if(JSON.parse(this.props.custom).userAuth)
            this.state = {
                userID: JSON.parse(this.props.custom).user._id,
                pollId: this.props.params.splat,
                poll: {
                    userID: '',
                    name: '',
                    title: '',
                    options: []
                }
            }
        else {
            this.state = {
                userID: JSON.parse(this.props.custom).user,
                pollId: this.props.params.splat,
                poll: {
                    userID: '',
                    name: '',
                    title: '',
                    options: []
                }
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
                $('[data-toggle="popover"]').popover();
            }
         }).catch(function(err){
             console.log(err);
         });
    }

    componentDidUpdate() {
        var self = this;
        var options = [],
            votes = [];        
        self.state.poll.options.map(function (item, id) {
            options.push(item.option);
            votes.push(item.voters.length);
        })
        var ctx = $("#result");
        var myChart = new Chart(ctx, {
            type: 'doughnut',
            data: {
                labels: options,
                datasets: [{
                    label: '# of Votes',
                    data: votes,
                    backgroundColor: [
                        'rgba(255, 88, 88, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 76, 1)',
                        'rgba(75, 215, 88, 1)'
                    ],
                    borderColor: [
                        'rgba(255, 88, 88, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 76, 1)',
                        'rgba(75, 215, 88, 1)'
                    ],
                    borderWidth: 1,
                    hoverBorderWidth: 3
                }]
            }
        });
    }
    
    render() {
        var self = this;
        var poll = this.state.poll;
        return (
            <div className="viewpoll">
                <div className="poll">
                    <div className="poll-topic">{poll.title}</div>
                    <div className="poll-author">by: {poll.name}</div>
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
                                                <input type="radio" name={"vote"+id} onChange={self.handleRadio} value={item._id} />
                                            </span>
                                            <label className="input-group-addon option" htmlFor={"vote"+id}>{item.option}</label>
                                            <span className="input-group-addon badge">{item.voters.length}</span>
                                        </div>
                                    </li>
                                )
                            })}
                        </ul>
                        <div className="btn-vote"
                            data-container="body" data-toggle="popover" data-placement="bottom"
                            data-content="You have voted already." data-animation="true"
                            onClick={self.handleVote.bind(self)}>
                             <i className="fa fa-check"/>&nbsp;Vote
                        </div>
                    </div>
                    <div className="poll-result">
                        <h4>Result</h4>
                        <canvas id="result" height="180px"/>
                    </div>
                </div>
            </div>
        );
    }
}

module.exports = ViewPoll;