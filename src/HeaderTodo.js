import React, {Component} from 'react';

import logo from './todopostit.png';
import App from './App.js';

class HeaderTodo extends Component {

    render() {
        return (
            <div>
                <img src={logo} className="App-logo" alt="logo"/>
                <h1 className="App-title">{this.props.appTitle}</h1>
            </div>
    )
    }
}

export default HeaderTodo;