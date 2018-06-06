import React, { Component } from 'react';
import './scss/UserListComponent.scss'
import createRequest from "../HttpClient";
import UserContainer from "./User/UserContainer";

function newUserInfo(cb) {
    createRequest('https://randomuser.me/api/?results=5', response => {
        cb(JSON.parse(response));
    });
}

class UserListComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isRequestFinished: false
        };

        this.reload = this.reload.bind(this);
    }

    render() {
        return(
            <div className={"UserListComponent"}>
                <div className="container">
                    for(let result in this.state.data) {
                        <UserContainer isRequestFinished={this.state.isRequestFinished} user={result}/>
                    }
                </div>
            </div>
        )
    }

    reload() {
        newUserInfo(data => this.setState({ isRequestFinished: true, data: data }));
    }

    componentDidMount() {
        newUserInfo(data => this.setState({ isRequestFinished: true, data: data }));
    }

}

export default UserListComponent;