import React, { Component } from 'react';
import { Router, Route } from "react-router";

import './App.css';

import { customHistory } from "../../history";

import { StartPage } from '../../pages/StartPage/StartPage';
import { CreateTaskPage } from '../../pages/CreateTaskPage/CreateTaskPage';
import { AboutPage } from '../../pages/AboutPage/AboutPage';

class App extends Component {
    render() {
        return (
            <Router history = { customHistory } >
                <div className="App">
                    <header className="App-header">
                        <Route exact path="/" component={StartPage} />
                        <Route exact path="/add" component={CreateTaskPage} />
                        <Route exact path="/about" component={AboutPage} />
                    </header>
                </div>
            </Router>
        );
    }
}

export default App;