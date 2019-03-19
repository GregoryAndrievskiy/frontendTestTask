import React, { Component } from 'react';
import { Router, Route } from "react-router";
import { createBrowserHistory } from 'history';

import './App.css';

import { StartPage } from './pages/StartPage/StartPage';

const customHistory = createBrowserHistory();

class App extends Component {
    render() {
        return (
            <Router history = { customHistory } >
                <div className="App">
                    <header className="App-header">
                        <Route exact path="/" component={StartPage} />
                    </header>
                </div>
            </Router>
        );
    }
}

export default App;
