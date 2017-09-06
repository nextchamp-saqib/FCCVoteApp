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
    <nav className="navbar navbar-toggleable-sm navbar-inverse">
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <div className="navbar-nav">
                <div className="nav-item active">
                    <a className="nav-link" href="/"><i className="fa fa-home"/> Home <span className="sr-only">(current)</span></a>
                </div>
                <div className="nav-item">
                    <a className="nav-link" href="/profile"><i className="fa fa-user"/> Profile</a>
                </div>
                <div className="nav-item">
                    <a className="nav-link" href="/login"><i className="fa fa-sign-in"/> Log In</a>
                </div>
                <div className="nav-item">
                    <a className="nav-link" href="/signup"><i className="fa fa-user-plus"/> Create Acoount</a>
                </div>
            </div>
        </div>
    </nav>

        );
    }
}

module.exports = NavBar;