import React, { Component } from 'react'

class App extends Component {

    click(){
        console.log('clicked');
    }

    render () {
        return (
            <div>
                Hello from comp
                <button onClick={this.click}>Click</button>
            </div>
        )
    }
}

module.exports = App;