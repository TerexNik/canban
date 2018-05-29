import React, { Component } from 'react';
import './scss/SingleUserForm.scss'
import createRequest from "../HttpClient";
import UserContainer from "./User/UserContainer";

function newUserInfo(cb) {
    createRequest('https://randomuser.me/api/', response => {
        cb(JSON.parse(response).results[0]);
    });
}

class SingleUserForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isRequestFinished: false
        };

        this.reload = this.reload.bind(this);
    }

    render() {
        return(
            <div className={"SingleUserForm"}>
                    <div className="container">
                        <UserContainer isRequestFinished={this.state.isRequestFinished} user={this.state.data}/>
                        <div className={'get-user-button'} onClick={this.reload}>Получить нового пользователя</div>
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

export default SingleUserForm;