import React, { Component } from 'react';
import axios from 'axios';

class Signup extends Component {
    handleSignup(e) {
        var self = this;
        //make post req to create user
        var data = {
            fname: self.refs.fname.value,
            lname: self.refs.lname.value,
            email: self.refs.email.value,
            passSignup: self.refs.passSignup.value,
            passConfirm: self.refs.passConfirm.value            
        }
        data = {
            fname: 'name',
            lname: 'name',
            email: 'asdf1234@gmail.com',
            passSignup: 'game1242',
            passConfirm: 'game1242'
        }
        if(data.passSignup == data.passConfirm && self.validateForm(data)){
            axios({
                method: 'post',
                url: '/signup/user',
                data: data
            }).then(function(response) {
                if(response.status == 200)
                    window.location.href = "/login";
                else if(response.status == 500){
                    //handle existing user
                }
            }).catch(function(error) {

            })
        }
    }
    validateForm(data) {
        var nameTest = /\w{3,}/;
        var emailTest = /[a-z0-9]{5,}@[a-z]+.[a-z]{3}/;
        var passTest = /[A-z0-9]{8,}/;
        if(nameTest.test(data.fname)&&
            nameTest.test(data.lname)&&
            emailTest.test(data.email)&&
            passTest.test(data.passSignup)){
                return true;
            }
        else {
            return false;
        }
    }
    render() {
        return (
            <div className="signup-form">
                <h3>Sign up</h3>
                <div className="form">
                    <div className="flex">
                        <div className="label">First Name:</div>
                        <div><input ref="fname" type="text" /></div>
                    </div>
                    <div className="flex">
                        <div className="label">Last Name:</div>
                        <div><input ref="lname" type="text" /></div>
                    </div>
                    <div className="flex">
                        <div className="label">E-mail ID:</div>
                        <div><input ref="email" type="text" /></div>
                    </div>
                    <div className="flex">
                        <div className="label">Password:</div>
                        <div><input ref="passSignup" type="password" /></div>
                    </div>
                    <div className="flex">
                        <div className="label">Confirm Password:</div>
                        <div><input ref="passConfirm" type="password" /></div>
                    </div>
                    <div className="flex">
                        <a ref="signup" className="btn-signup" onClick={this.handleSignup.bind(this)}>
                            Sign up &nbsp;
                            <i className=" fa fa-arrow-circle-right"/>
                        </a>
                    </div>
                </div>
            </div>
        );
    }
}

module.exports = Signup;