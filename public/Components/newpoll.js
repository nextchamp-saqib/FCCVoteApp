import React, { Component } from 'react';
import axios from 'axios';

class NewPoll extends Component {
    constructor(props) {
        super(props);
    }
    
    handleCreate(e){
        if(JSON.parse(this.props.custom).userAuth){
            const data = {
                userID: JSON.parse(this.props.custom).user._id,
                name: JSON.parse(this.props.custom).user.name,
                title : this.refs.title.value,
                options: [{
                    option: this.refs.op1.value,
                    voters: []
                },
                {
                    option: this.refs.op2.value,
                    voters: []
                },
                {
                    option: this.refs.op3.value,
                    voters: []
                },
                {
                    option: this.refs.op4.value,
                    voters: []
                }]
            }
            axios({
                method: 'post',
                url: 'newpoll/poll',
                data: data
            })
        }else {
            //user not authenticated
            this.refs.create.href = "/login";
        }
    }
    render() {
        return (
            <div className="newpoll">
                <h3>Create your own Poll</h3>
                <div className="new-poll-info">
                    <div className="flex">
                        <div className="label">Title</div>
                        <div><input ref="title" type="text" /></div>
                    </div>
                    <div className="flex option-border">
                        Options
                    </div>
                    <div className="flex">
                        <div className="label">Option 1</div>
                        <div><input ref="op1" type="text" /></div>
                    </div>
                    <div className="flex">
                        <div className="label">Option 2</div>
                        <div><input ref="op2" type="text" /></div>
                    </div>
                    <div className="flex">
                        <div className="label">Option 3</div>
                        <div><input ref="op3" type="text" /></div>
                    </div>
                    <div className="flex">
                        <div className="label">Option 4</div>
                        <div><input ref="op4" type="text" /></div>
                    </div>
                    <div className="flex">
                        <a ref='create' href="/polls" className="btn-create" onClick={this.handleCreate.bind(this)}>
                            <i className=" fa fa-plus"/> Create
                        </a>
                    </div>
                </div>
            </div>
        );
    }
}

module.exports = NewPoll;