import React, { Component } from 'react';
import '../img/logo-vector.svg'
import './scss/Header.scss'

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = { currentScreen: null };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e, item) {
        e.preventDefault();
        console.log('Current item in header: ', item);
        this.setState({currentScreen: item});
    }

    render() {
        return (
            <header className={'header'}>
                <div className="container">
                    <div className={'title-logo'}>
                        <img src="../images/logo-vector.svg" alt=""/>
                        <div className="text">Hirakuve</div>
                    </div>
                    <ul className={'menu'}>
                        <a className={'menu-item-link'} onClick={(e) => this.handleClick(e, 'user')}><li className={'menu-item'}>Пользователь</li></a>
                        <a className={'menu-item-link'} onClick={(e) => this.handleClick(e, 'book')}><li className={'menu-item'}>Аддресная книга</li></a>
                        <a className={'menu-item-link'} onClick={(e) => this.handleClick(e, 'about')}><li className={'menu-item'}>О нас</li></a>
                    </ul>
                </div>
            </header>
        )
    }
}

export default Header