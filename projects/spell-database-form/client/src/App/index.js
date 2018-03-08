import React from 'react';
// import { Switch, Route } from "react-router-dom";

//Navbar
// import Navbar from "./Navbar";
//Pages
// import Home from "../pages/Home";
// import About from "../pages/About";
// import SpellList from "../pages/SpellList";
import AllSpells from "../pages/spells/index"

function App(props) {
    return (
        <div>
            <AllSpells/>
        </div>
    )
}
export default App
// <Navbar />
// <Switch>
//     <Route exact path="/" component={Home} />
//     <Route path="/about" component={About} />
//     <Route path='/spelllist' component={SpellList}/>
// </Switch>