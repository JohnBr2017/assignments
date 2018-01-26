import React, { Component } from "react";
import { connect } from "react-redux";
import { addRecipe, editRecipe } from "../Redux/recipes.js"

class Form extends Component {
    constructor(props) {
        super(props);
        let {name, category, cookTime}= props
        this.state = {
            inputs: {
                name: name || "",
                category: category || "",
                cookTime: cookTime || ""
            }
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
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
    clearInputs() {
        this.setState({
            inputs: {
                name: "",
                category: "",
                cookTime: ""
            }
        })
    }
    handleSubmit(e) {
        e.preventDefault();
        let { editRecipe, addRecipe, add, index}= this.props;
            if(add){
                addRecipe(this.state.inputs)
            }else {
                editRecipe(this.state.inputs, index)
            }
        if (this.props.clear) {
            this.clearInputs();
        }

    }
    render() {
        let { name, category, cookTime } = this.state.inputs
        return (
            <form onSubmit={this.handleSubmit}>
                <input onChange={this.handleChange} value={name} name="name" type="text" placeholder="name" />
                <input onChange={this.handleChange} value={category} name="category" type="text" placeholder="category"/>
                <input onChange={this.handleChange} value={cookTime} name="cookTime" type="text" placeholder="cooktime"/>
                <button>Submit</button>
            </form>
        )
    }
}



export default connect(null, { addRecipe, editRecipe })(Form)