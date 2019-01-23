import React, {Component } from 'react';
import { Link } from 'react-router-dom';

import logo from '.././logo.svg';


export default class Header extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="/#" target="_blank">
                    <img src={logo} width="50" height="50" alt="brand logo"></img>
                </a>
                <Link to="/" className="navbar-brand">MERN-Stack Todo App</Link>
                <div className="collpase nav-collapse">
                    <ul className="navbar-nav mr-auto">
                        <li className="navbar-item"><Link to="/" className="nav-link">Todos</Link> </li>
                        <li className="navbar-item"><Link to="/create" className="nav-link">Create Todos</Link> </li>
                    </ul>
                </div>
            </nav>
        );
    }
}