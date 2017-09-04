import React, { Component } from 'react';

class NavBar extends Component {
    render() {
        return (
    <nav className="navbar navbar-toggleable-sm navbar-inverse bg-inverse">
        <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <div className="navbar-nav justify-content">
                <div className="nav-item active">
                    <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
                </div>
                <div className="nav-item">
                    <a className="nav-link" href="#">Profile</a>
                </div>
                <div className="nav-item">
                    <a className="nav-link" href="#">Log In</a>
                </div>
                <div className="nav-item">
                    <a className="nav-link" href="#">Sign Out</a>
                </div>
            </div>
        </div>
    </nav>

        );
    }
}

export default NavBar;