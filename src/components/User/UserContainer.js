import React, {Component} from 'react';
import './user.scss'

class UserContainer extends Component {
    render() {
        function setUpName(name) {
            let firstLetterUpperCase = str => str[0].toUpperCase() + str.substring(1);
            return name.title.toUpperCase() + " " + firstLetterUpperCase(name.first) + " " + firstLetterUpperCase(name.last);
        }

        return (
            <div className={'User'}>
                <img src={this.props.user.picture.medium} alt="Avatar" className="avatar"/>
                <ul className="user-info">
                    <li className="user-info-text name">{setUpName(this.props.user.name)}</li>
                    <li className="user-info-text">{this.props.user.email}</li>
                    <li className="user-info-text">{this.props.user.gender}</li>
                </ul>
            </div>
        )
    }
}

export default UserContainer;