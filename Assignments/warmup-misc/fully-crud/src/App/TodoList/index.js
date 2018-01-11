import React, { Component } from 'react';

import Loading from "../shared/Loading";
import Form from "../shared/Form";

import { Link } from "react-router-dom";

import "./index.css";

import axios from "axios";
let todoUrl = "https://api.vschool.io/johnbroadhead/todo/";

export default class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: [],
            loading: true
        }
        this.addTodo = this.addTodo.bind(this);
    }
    componentDidMount() {
        axios.get(todoUrl)
            .then((response) => {
                let { data } = response;
                this.setState({
                    todos: data,
                    loading: false,
                })
            })
            .catch((err) => {
                console.error(err);
                this.setState({
                    todos: [],
                    loading: false
                })
            })
    }
    addTodo(todo) {
        axios.post(todoUrl, todo)
            .then((response) => {
                let { data } = response;
                this.setState((prevState) => {
                    let newTodos = [...prevState.todos, data];
                    return {
                        todos: newTodos
                    }
                })
            })
            .catch((err) => {
                console.error(err);
            });
    }

    render() {
        let { todos, loading } = this.state;
        return (
            loading ?
                <Loading></Loading>
                :
                <div>
                    <Form submit={this.addTodo} clear></Form>
                    <div className="todos-sidebar">
                        {todos.map((todo) => {
                            let { title, _id } = todo;
                            return <Link to={`/todos/${_id}`} key={_id}>{title}</Link>
                        })}
                    </div>
                </div>
        )
    }
}