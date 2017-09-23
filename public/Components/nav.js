import React, { Component } from 'react';

class NavBar extends Component {
    renderRight(){
        var props = JSON.parse(this.props.custom);
        if(!props.userAuth){
            return (
                <div className="navright">
                    <div className="navlink">
                        <a className="link" href="/login"><i className="fa fa-sign-in"/> Log In</a>
                    </div>
                    <div className="navlink">
                        <a className="link" href="/signup"><i className="fa fa-user-plus"/> Create Account</a>
                    </div>
                </div>
            );
        }else {
            return (
                <div className="navright">
                    <div className="navlink">
                        <a className="link" href="/profile"><i className="fa fa-user"/> Profile</a>
                    </div>
                    <div className="navlink">
                        <a className="link" href="/signout"><i className="fa fa-sign-out"/> Log Out</a>
                    </div>
                </div>
            );
        }
    }
    render() {
        return (
            <div className="nav-bar">
                <div data-toggle="collapse" data-target="#drop" className="menu link fa fa-4x fa-bars" />
                <div id="drop" className="collapse">
                    <div className="navleft">
                        <div className="navlink">
                            <a className="link" href="/"><i className="fa fa-home"/> Home <span className="sr-only">(current)</span></a>
                        </div>
                        <div className="navlink">
                            <a className="link" href="/polls"><i className="fa fa-pie-chart"/> Polls <span className="sr-only">(current)</span></a>
                        </div>
                    </div>
                    {this.renderRight()}
                </div>
            </div>
        );
    }
}

module.exports = NavBar;