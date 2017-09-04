import React, { Component } from 'react';

class Login extends Component {
    render() {
        return (
        <div className="login-form">
            <h3>Login</h3>
            <div className="row">
                <div className="col-sm-6 local">
                    <div className="credentials">
                        <div className="p-2">
                            &nbsp;E-mail ID :
                        </div>
                        <div className="p-2">
                            <input type="text" id="email" />
                        </div>
                        <div className="p-2">
                            Password :
                        </div>
                        <div className="p-2">
                            <input type="text" id="email" />
                        </div>
                    </div>
                    <button className="btn-login fa fa-2x fa-arrow-circle-right"></button>
                </div>
                <div className="col-sm-6 google">
                    <button className="btn-google">
                        <i className="fa fa-google-plus"/>&nbsp;&nbsp;Sign in with Google
                    </button>
                </div>
            </div>
        </div>
        );
    }
}

export default Login;