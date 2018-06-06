import React, {Component} from 'react';
import './scss/App.scss'
import Header from "./Header";
import Footer from "./Footer";
import Content from "./Content";

function toggle() {

}

class App extends Component {
    render() {
        return (
            <div className={'App'}>
                <div className="wrapper">
                    <Header/>
                    <Content/>
                    <button onClick={(e) => {console.log('Current screen: ', Header.getScreen())}}>logger</button>
                </div>
                <Footer/>
            </div>
        )
    }
}

export default App;