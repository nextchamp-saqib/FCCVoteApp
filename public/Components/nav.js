import React, { Component } from 'react';

class NavBar extends Component {
    renderUser(){
        return (
            <div className="nav-item">
                <a className="nav-link" href="/login"><i className="fa fa-sign-in"/> Log In</a>
            </div>
        );
    }
    render() {
        return (
            <div className="nav-bar">
                <div data-toggle="collapse" data-target="#drop" className="menu link fa fa-2x fa-bars" />
                <div id="drop" className="collapse">
                    <div className="navleft">
                        <div className="navlink">
                            <a className="link" href="/"><i className="fa fa-home"/> Home <span className="sr-only">(current)</span></a>
                        </div>
                        <div className="navlink">
                            <a className="link" href="/"><i className="fa fa-pie-chart"/> Polls <span className="sr-only">(current)</span></a>
                        </div>
                    </div>
                    <div className="navright">
                        <div className="navlink">
                            <a className="link" href="/login"><i className="fa fa-sign-in"/> Log In</a>
                        </div>
                        <div className="navlink">
                            <a className="link" href="/signup"><i className="fa fa-user-plus"/> Create Account</a>
                        </div>
                        <div className="navlink">
                            <a className="link" href="/profile"><i className="fa fa-user"/> Profile</a>
                        </div>
                    </div>
                    </div>
            </div>
        );
    }
}

module.exports = NavBar;