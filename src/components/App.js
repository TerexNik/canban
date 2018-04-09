import React, {Component} from 'react';
import UserContainer from "./User/UserContainer";
import getUserInfo from "./User/User";
import '../img/logo-vector.svg'
import './App.scss'

class App extends Component {
    render() {
        return (
            <div className={'App'}>
                <div className="wrapper">
                    <header className={'header'}>
                        <div className="container">
                            <div className={'title-logo'}>
                                <img src="/images/logo-vector.svg" alt=""/>
                                <div className="text">Hirakuve</div>
                            </div>
                            <ul className={'menu'}>
                                <a className={'menu-item-link'}><li className={'menu-item'}>Пользователь</li></a>
                                <a className={'menu-item-link'}><li className={'menu-item'}>Приложение</li></a>
                                <a className={'menu-item-link'}><li className={'menu-item'}>О нас</li></a>
                            </ul>
                        </div>
                    </header>
                    <div className="block1">
                        <div className="container">
                            <UserContainer user = {getUserInfo('')}/>
                        </div>
                    </div>
                    <div className="block2">
                        <div className="container">
                            <div className={'get-user-button'}>Получить нового пользователя</div>
                        </div>
                    </div>
                </div>
                <footer className={'footer'}>
                    <div className={'container'}>
                        <ul className="footer-box">
                            <li className="footer-box-item">
                                <ul className="footer-list">
                                    <li className="footer-list-text">Lorem ipsum dolor.</li>
                                    <li className="footer-list-text">Lorem ipsum dolor sit.</li>
                                    <li className="footer-list-text">Lorem ipsum <b>dolor</b> sit amet, consectetur.</li>
                                </ul>
                            </li>
                            <li className="footer-box-item">
                                <ul className="footer-list">
                                    <li className="footer-list-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. <b>Aspernatur</b>, eligendi.</li>
                                </ul>
                            </li>
                            <li className="footer-box-item">
                                <ul className="footer-list">
                                    <li className="footer-list-text">Lorem ipsum dolor sit.</li>
                                    <li className="footer-list-text">Lorem ipsum dolor sit amet, <b>consectetur</b> adipisicing elit. Minus?</li>
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