import React, { Component } from 'react';

import Loading from "../shared/Loading";

import axios from "axios";

let todoItemUrl = "https://api.vschool.io/johnbroadhead/todo/";

export default class TodoItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todo: {},
            loading: true
        }
        this.removeItem = this.removeItem.bind(this);
    }
    componentDidMount() {
        let { id } = this.props.match.params;
        axios.get(todoItemUrl + id)
            .then((response) => {
                let { data } = response;
                this.setState({
                    todo: data,
                    loading: false
                })
            })
            .catch((err) => {
                console.error(err);
                this.setState({
                    todo: {},
                    loading: false
                })
            })
    }
    removeItem() {
        let { id } = this.props.match.params;
        let { history } = this.props;
        axios.delete(todoItemUrl + id)
            .then((response) => {
                alert(`Item ${id} was successfully removed!`);
                history.push("/");
            })
            .catch((err) => {
                console.error(err);
                history.push("/");
            })
    }
    render() {
        let { todo, loading } = this.state;
        let { title, description, price, completed, imgUrl } = todo;
        let style = { backgroundImage: `url(${imgUrl})` };
        return (
            loading ?
                <Loading></Loading>
                :
                <div style={style}>
                    <h1>{title}</h1>
                    <h2>Price: ${price}</h2>
                    <p>Completed: {String(completed)}</p>
                    <p>Description: {description}</p>
                    <button onClick={this.removeItem}>X</button>
                </div>
        )
    }
}