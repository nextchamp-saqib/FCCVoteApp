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
        if(data.passSignup == data.passConfirm && self.validateForm(data)){
            axios({
                method: 'post',
                url: '/signup/user',
                data: data
            }).then(function(response) {
                if(response.status == 200)
                    window.location.href = "/login";
                else if(response.status == 500){
                    alert('Email already exists.')
                }
            }).catch(function(error) {

            })
        } else {
            alert("Password doesn't match");
        }
    }
    validateForm(data) {
        var nameTest = /\w{3,}/;
        var emailTest = /[a-z0-9]{5,}@[a-z]+.[a-z]{3}/;
        var passTest = /[A-z0-9]{8,}/;
        if(!nameTest.test(data.fname)){
            alert('First Name should have 3 or more alphabets.')
            return false;
        }else if(!nameTest.test(data.lname)){
            alert('Last Name should have 3 or more alphabets.')
            return false;
        }else if(!emailTest.test(data.email)){
            alert('Email should should be of more than 5 characters long and must contain @ sign.')
            return false;
        }else if(!passTest.test(data.passSignup)){
            alert('Password should have alphabets and numbers and must be 8 or more char long.');
            return false;
        }else {
            return true;
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