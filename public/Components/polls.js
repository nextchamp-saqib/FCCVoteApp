import React, { Component } from 'react';

class Polls extends Component {
    render() {
        return (
            <div className="polls-container">
                <h3>Current Polls</h3>
                <div className=""></div>
                <div className="polls">
                    <div className="poll">
                        <div className="poll-topic">Vote Topic</div>
                        <div className="poll-author">By: Someone</div>
                        <div className="view-poll"><a href="/polls/view/5"><i className="fa fa-list-alt"/> &nbsp;View</a></div>
                        <div className="share-poll"><a href="/polls/view/5"><i className="fa fa-facebook"/> &nbsp;Share</a></div>
                    </div>
                    <div className="poll">
                        <div className="poll-topic">Vote Topic</div>
                        <div className="poll-author">By: Someone</div>
                        <div className="view-poll"><a href="/polls/view/5"><i className="fa fa-list-alt"/> &nbsp;View</a></div>
                        <div className="share-poll"><a href="/polls/view/5"><i className="fa fa-facebook"/> &nbsp;Share</a></div>
                    </div>
                    <div className="poll">
                        <div className="poll-topic">Vote Topic</div>
                        <div className="poll-author">By: Someone</div>
                        <div className="view-poll"><a href="/polls/view/5"><i className="fa fa-list-alt"/> &nbsp;View</a></div>
                        <div className="share-poll"><a href="/polls/view/5"><i className="fa fa-facebook"/> &nbsp;Share</a></div>
                    </div>
                    <div className="poll">
                        <div className="poll-topic">Vote Topic</div>
                        <div className="poll-author">By: Someone</div>
                        <div className="view-poll"><a href="/polls/view/5"><i className="fa fa-list-alt"/> &nbsp;View</a></div>
                        <div className="share-poll"><a href="/polls/view/5"><i className="fa fa-facebook"/> &nbsp;Share</a></div>
                    </div>
                </div>
                
            </div>
        );
    }
}

module.exports = Polls;