import React, { Component } from 'react';
import axios from 'axios';

class Login extends Component {
    handleLogin(e) {
        var data = {
            email: this.refs.email.value,
            password: this.refs.passLogin.value
        }
        axios({
            method: 'post',
            url: '/login/user',
            data: data
        }).then(function(response){
            if(response.status == 200){
                window.location.href = "/";
            }
        })
    }
    render() {
        return (
        <div className="login-form">
            <h3>Login</h3>
            <div className="form">
                <div className="box">
                    <div className="flex">
                        <div className="label">E-mail ID:</div>
                        <div><input ref="email" type="text" /></div>
                    </div>
                    <div className="flex">
                        <div className="label">Password:</div>
                        <div><input ref="passLogin" type="password" /></div>
                    </div>
                    <div className="flex">
                        <button className="btn-login" onClick={this.handleLogin.bind(this)}>
                            <i className=" fa fa-2x fa-arrow-circle-right"/>
                        </button>
                    </div>
                </div>
                <div className="box">
                    <a className="btn-google" href="/auth/google">
                        <i className="fa fa-google-plus"/>&nbsp;&nbsp;Sign in with Google
                    </a>
                    <a className="btn-github">
                        <i className="fa fa-github"/>&nbsp;&nbsp;Sign in with GitHub
                    </a>
                </div>
            </div>
        </div>
        );
    }
}

module.exports = Login;