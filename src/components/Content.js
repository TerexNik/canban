import React, {Component} from 'react';
import './scss/Content.sass'
import SingleUserForm from "./SingleUserForm";

class Content extends Component {
    render() {
        return (
            <div className={'Content'}>
                <div className="center">
                    <input type="checkbox" id={"cbx"} className={"hide"}/>
                    <label htmlFor={"cbx"} className={"toggle"}><span></span></label>
                </div>
                <SingleUserForm/>
            </div>
        )
    }
}

export default Content;