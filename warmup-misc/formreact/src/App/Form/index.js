import React, { Component } from "react";

class Form extends Component {
    constructor(props) {
        super();
        this.state = {
            inputs: {
                username: "",
                password: ""
            }
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(e) {
        let { name, value } = e.target;
        this.setState((prevState) => {
            return {
                inputs: {
                    ...prevState.inputs,
                    [name]: value
                }
            }
        })

    }
    handleSubmit(e) {
        e.preventDefault();
        let { username } = this.state.inputs;
        alert(`Welcome to my useless app, ${username}!!`)

    }
    render() {
        let { username, password } = this.state.inputs;
        return (
            <form onSubmit={this.handleSubmit}>
                <h3>signup form</h3>
                <input onChange={this.handleChange} value={username} type="text" placeholder="username" />
                <input onChange={this.handleChange} value={password} type="password" placeholder="password" />
                <button  >Submit</button>
            </form>
        )
    }
}
export default Form;
