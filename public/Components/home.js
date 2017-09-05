import React, { Component } from 'react';

class Home extends Component {
    render() {
        return (
            <div className="container-fluid">
                <div className="jumbotron m-0">
                    <h1 className="display-3">VoteCast</h1>
                    <p className="lead">...your ideas <i className="fa fa-lightbulb-o" /></p>
                </div>
                <div className="row">
                    <div className="col-md-3 card">
                        <div className="card-block">
                            <h3 className="card-title">
                                <span className="fa fa-thumbs-o-up" />
                                &nbsp;Vote
                            </h3>
                            <p className="card-text">
                                Vote for current polls.
                            </p>
                        </div>
                    </div>
                    <div className="col-md-3 card">
                        <div className="card-block">
                            <h3 className="card-title">
                                <span className="fa fa-plus-circle" />
                                &nbsp;Create
                            </h3>
                            <p className="card-text">Create your own poll by signing up or loging in using Google account.</p>
                        </div>
                    </div>
                    <div className="col-md-3 card">
                        <div className="card-block">
                            <h3 className="card-title">
                                <span className="fa fa-eye" />
                                &nbsp;View
                            </h3>
                            <p className="card-text">View results of current polls in real-time.</p>
                        </div>
                    </div>
                    <div className="col-md-3 card">
                        <div className="card-block">
                            <h3 className="card-title">
                            <span className="fa fa-share-alt" />
                                &nbsp;Share
                            </h3>
                            <p className="card-text">Share your favorite polls with your friends.</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

module.exports = Home;        