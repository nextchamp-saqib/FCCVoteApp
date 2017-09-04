import React, { Component } from 'react'
import Navbar from './navbar';
import Home from './home';
import Login from './login';

class App extends Component {
    render () {
        return (
            <div>
                <Navbar />
                <Login />
            </div>
        )
    }
}

module.exports = App;