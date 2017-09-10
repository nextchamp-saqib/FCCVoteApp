import React, { Component } from 'react';

class ViewPoll extends Component {
    render() {
        return (
            <div className="viewpoll">
                <div className="poll">
                    <div className="poll-topic">Vote Topic</div>
                    <div className="poll-author">By: Someone</div>
                    <div className="share-poll"><a href="/polls/view/5"><i className="fa fa-facebook"/> &nbsp;Share</a></div>
                </div>
                <div className="poll-info">
                    <div className="poll-vote">
                        <h4>Vote</h4>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">
                                <div className="input-group">
                                    <span className="input-group-addon">
                                        <input type="radio" aria-label="Checkbox for following text input" />
                                    </span>
                                    <span className="input-group-addon option">Option 1</span>
                                </div>
                            </li>
                            <li className="list-group-item">
                                <div className="input-group">
                                    <span className="input-group-addon">
                                        <input type="radio" aria-label="Checkbox for following text input" />
                                    </span>
                                    <span className="input-group-addon option">Option 1</span>
                                </div>
                            </li>
                            <li className="list-group-item">
                                <div className="input-group">
                                    <span className="input-group-addon">
                                        <input type="radio" aria-label="Checkbox for following text input" />
                                    </span>
                                    <span className="input-group-addon option">Option 1</span>
                                </div>
                            </li>
                            <li className="list-group-item">
                                <div className="input-group">
                                    <span className="input-group-addon">
                                        <input type="radio" aria-label="Checkbox for following text input" />
                                    </span>
                                    <span className="input-group-addon option">Option 1</span>
                                </div>
                            </li>
                        </ul>
                        <div className="btn-vote"><i className="fa fa-check"/>&nbsp;Vote</div>
                    </div>
                    <div className="poll-result"><h4>Result</h4></div>
                </div>
            </div>
        );
    }
}

module.exports = ViewPoll;