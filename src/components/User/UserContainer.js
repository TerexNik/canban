import React, {Component} from 'react';
import './user.scss'

class UserContainer extends Component {
    render() {
        function setUpName(name) {
            let firstLetterUpperCase = str => str[0].toUpperCase() + str.substring(1);
            return name.title.toUpperCase() + " " + firstLetterUpperCase(name.first) + " " + firstLetterUpperCase(name.last);
        }

        const isRequestFinished = this.props.isRequestFinished;
        const user = this.props.user;

        if (isRequestFinished === false)
            return (<h1 className={'loader'}>Loading</h1>);
        else
            return (
                <div className={'User'}>
                    <img src={user.picture.medium} alt="Avatar" className="avatar"/>
                    <ul className="user-info">
                        <li className="user-info-text name">{setUpName(user.name)}</li>
                        <li className="user-info-text">{user.email}</li>
                        <li className="user-info-text">{user.gender}</li>
                    </ul>
                </div>
            );
    }
}

export default UserContainer;