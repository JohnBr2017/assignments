import React, { Component } from "react";

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputs: {
                name: ""
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
    clearInputs(){
        this.setState({
            inputs:{
                name: ""
            }
        })
    }
    handleSubmit(e){
        e.preventDefault();
        this.props.submit(this.state.inputs, this.props.index);
        this.clearInputs();
    }
    render() {
        let { name } = this.state.inputs;
        return (
            <form >
                <input onChange={this.handleChange} value={name} placeholder="Names" type="text" />
                <h1>Names</h1>
                <div>

                </div>
            </form>
        )
    }
}

export default Form;