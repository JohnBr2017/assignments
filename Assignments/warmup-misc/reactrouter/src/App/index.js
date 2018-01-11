import React from 'react';
import { Switch, Route } from "react-router-dom";

//Navbar
import Navbar from "./Navbar";
//Pages
import Home from "../pages/Home";
import About from "../pages/About";
import Services from "../pages/Services";
import Service from "../pages/Service"





function App(props) {
    return (
        <div>
            <Navbar />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/about" component={About} />
                <Route path="/services" component={Services} />
            </Switch>
        </div>
    )
}


export default App;