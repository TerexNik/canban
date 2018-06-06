import React, {Component} from 'react';
import './scss/Content.sass'
import SingleUserForm from "./SingleUserForm";

class Content extends Component {
    render() {
        return (
            <div className={'Content'}>
                <SingleUserForm/>
            </div>
        )
    }
}

export default Content;