import React, {Component} from 'react';
import './scss/App.scss'
import Header from "./Header";
import Footer from "./Footer";
import Content from "./Content";

class App extends Component {
    render() {
        return (
            <div className={'App'}>
                <div className="wrapper">
                    <Header/>
                    <Content/>
                </div>
                <Footer/>
            </div>
        )
    }
}

export default App;