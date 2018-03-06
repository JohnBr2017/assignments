import React from "react";
import { Switch, Route } from "react-router-dom"

//Navbar
import Navbar from "./Navbar"
//Pages
import Home from "../pages/Home"
import About from "../pages/About"
import Projects from "../pages/Projects"
//css
import "./app.css"

function App(props) {
    return (
        <div className="app">
            <Navbar className="navbar" />
            <span className="vus">VUS</span>
            <div className="pages">
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/projects" component={Projects} />
                    <Route exact path="/about" component={About} />
                </Switch>
            </div>
        </div>
    )
}

export default App;