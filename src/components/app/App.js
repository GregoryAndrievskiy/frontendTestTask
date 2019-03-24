import React, { Component } from "react";
import { Router, Route } from "react-router";

import "./App.css";

import { customHistory } from "../../utils/history";

import { StartPage } from "../../pages/StartPage/StartPage";
import { CreateTaskPage } from "../../pages/CreateTaskPage/CreateTaskPage";
import { AboutPage } from "../../pages/AboutPage/AboutPage";
import TabMenu from "../TabMenu/TabMenu";
import { tabMenuConnector } from "../TabMenu/connectors/tabMenuConnector";

const TabMenuContainer = tabMenuConnector(TabMenu);

class App extends Component {
    render() {
        return (
            <Router history = { customHistory } >
                <div className="App">
                    <header className="App-header">
                        <TabMenuContainer />
                    </header>
                    <Route exact path="/" component={StartPage} />
                    <Route exact path="/add" component={CreateTaskPage} />
                    <Route exact path="/about" component={AboutPage} />
                </div>
            </Router>
        );
    }
}

export default App;
