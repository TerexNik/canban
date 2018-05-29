import React, {Component} from 'react';
import './scss/App.scss'
import Header from "./Header";
import SingleUserForm from "./SingleUserForm";
import Footer from "./Footer";

class App extends Component {
    render() {
        return (
            <div className={'App'}>
                <div className="wrapper">
                    <Header/>
                    <SingleUserForm/>
                </div>
                <Footer/>
            </div>
        )
    }
}

export default App;