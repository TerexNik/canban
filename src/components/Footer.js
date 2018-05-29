import React, { Component } from 'react';
import './scss/Footer.scss'

class Footer extends Component {
    render() {
        return (
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
        )
    }
}

export default Footer