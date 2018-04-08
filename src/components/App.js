import React, {Component} from 'react';
import UserContainer from "./User/UserContainer";

class App extends Component {
    render() {
        return (
            <div className={'App'}>
                <header>
                    <div className="container">
                        <div className={'title-logo'}>Title</div>
                        <ul className={'menu'}>
                            <li className={'menu-item'}>Главная</li>
                            <li className={'menu-item'}>Пользователь</li>
                            <li className={'menu-item'}>Контакты</li>
                            <li className={'menu-item'}>Приложение</li>
                        </ul>
                    </div>
                </header>
                <div className="container">
                    <UserContainer/>
                </div>
                <footer>
                    <div className={'container'}>
                        <ul className="footer-box">
                            <li className="footer-box-item">
                                <ul className="footer-list">
                                    <li className="footer-list-text">Lorem ipsum dolor.</li>
                                    <li className="footer-list-text">Lorem ipsum dolor sit.</li>
                                    <li className="footer-list-text">Lorem ipsum dolor sit amet, consectetur.</li>
                                </ul>
                            </li>
                            <li className="footer-box-item">
                                <ul className="footer-list">
                                    <li className="footer-list-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur, eligendi.</li>
                                </ul>
                            </li>
                            <li className="footer-box-item">
                                <ul className="footer-list">
                                    <li className="footer-list-text">Lorem ipsum dolor sit.</li>
                                    <li className="footer-list-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus?</li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </footer>
            </div>
        )
    }
}

export default App;