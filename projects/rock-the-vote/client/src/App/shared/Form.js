import React, { Component } from 'react'


class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputs: {
                spellName: "",
                author: "",
                school: "",
                desc: "",
                review: ""
            }
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.clearInputs = this.clearInputs.bind(this)
    };
    handleChange = (e) => {
        let {name, value} = e.target;
        this.setState(prevState => {
            return {
                inputs: {
                    ...prevState.inputs,
                    [name]: value
                }
            }
        });
    }

    clearInputs = () => {
        this.setState({
            inputs: {
                spellName: "",
                author: "",
                school: "",
                desc: "",
                review: ""
            }
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        let {add, id} = this.props;
        this.clearInputs();
        if (add) {
            this.props.submit(this.state.inputs)
        } else {
            console.log("submit test")
            this.props.submit(this.state.inputs, id);
        }
    }

    render() {
        let { spellName, author, school, desc, review } = this.props
        return (
            <form onSubmit={this.handleSubmit}>
                <input onChange={this.handleChange} value={spellName} name="spellName" type="text" placeholder="spell name" />
                <input onChange={this.handleChange} value={author} name="author" type="text" placeholder="author" />
                <input onChange={this.handleChange} value={school} name="school" type="text" placeholder="school" />
                <input onChange={this.handleChange} value={desc} name="desc" type="text" placeholder="description" />
                <input onChange={this.handleChange} value={review} name="review" type="text" placeholder="review" />
                <button className="submit" type="submit">Submit</button>
            </form>
        )
    }
}

export default (Form)

