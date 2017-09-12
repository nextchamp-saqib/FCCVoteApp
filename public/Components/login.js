import React, { Component } from 'react';

class Login extends Component {
    render() {
        return (
        <div className="login-form">
            <h3>Login</h3>
            <div className="form">
                <div className="box">
                    <div className="flex">
                        <div className="label">E-Mail ID:</div>
                        <div><input id="email" type="text" /></div>
                    </div>
                    <div className="flex">
                        <div className="label">Password:</div>
                        <div><input id="pass-login" type="text" /></div>
                    </div>
                    <div className="flex">
                        <button className="btn-login"><i className=" fa fa-2x fa-arrow-circle-right"/></button>
                    </div>
                </div>
                <div className="box">
                    <button className="btn-google" href="/auth/google">
                        <i className="fa fa-google-plus"/>&nbsp;&nbsp;Sign in with Google
                    </button>
                    <button className="btn-github">
                        <i className="fa fa-github"/>&nbsp;&nbsp;Sign in with GitHub
                    </button>
                </div>
            </div>
        </div>
        );
    }
}

module.exports = Login;