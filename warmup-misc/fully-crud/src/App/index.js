import React from 'react';

import TodoList from "./TodoList";
import TodoItem from "./TodoItem";

import { Switch, Route, Link } from "react-router-dom";

function App() {
    return (
        <div>
            <Link to="/"><h1>My Todos</h1></Link>
            <Switch>
                <Route exact path="/" component={TodoList}></Route>
                <Route path="/todos/:id" component={TodoItem}></Route>
            </Switch>
            <footer>&copy;2018</footer>
        </div>
    )
}

export default App;