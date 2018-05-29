import React, { Component } from 'react'
import UserContainer from "./UserContainer"

class User extends Component {
    render() {
        if (isRequestFinished === false)
            return <h1 className={'loader'}>ЗАГРУЗКА</h1>;
        return (
            <UserContainer user={data} />
        )
    }
}

export default User;