import React, { Component } from 'react';
import '../img/logo-vector.svg'
import './scss/Header.scss'

class Header extends Component {
    render() {
        return (
            <header className={'header'}>
                <div className="container">
                    <div className={'title-logo'}>
                        <img src="../images/logo-vector.svg" alt=""/>
                        <div className="text">Hirakuve</div>
                    </div>
                    <ul className={'menu'}>
                        <a className={'menu-item-link'}><li className={'menu-item'}>Пользователь</li></a>
                        <a className={'menu-item-link'}><li className={'menu-item'}>Приложение</li></a>
                        <a className={'menu-item-link'}><li className={'menu-item'}>О нас</li></a>
                    </ul>
                </div>
            </header>
        )
    }
}

export default Header