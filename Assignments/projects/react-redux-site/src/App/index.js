import React from 'react';
import { Switch, Route } from "react-router-dom";

//Navbar
import Navbar from "./Navbar";
//Pages
import Home from "../pages/Home";
import About from "../pages/About";
import SpellBook from "..//pages/SpellBook";
// import DMBook from "../pages/DMBook"





function App(props) {
    return (
        <div>
            <Navbar />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/about" component={About} />
                <Route path='/spellbook' component={SpellBook}/>
                {/* <Route path='/dmbook' component={DMBook}/> */}
            </Switch>
        </div>
    )
}


export default App;