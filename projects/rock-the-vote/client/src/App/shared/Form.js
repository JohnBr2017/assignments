import React, { Component } from 'react'


class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputs: {
                spellName: props.spellName || "",
                author: props.author || "Anonymous",
                school: props.school || "Unknown",
                desc: props.desc || "",
                review: props.review || ""
            }
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.clearInput = this.clearInput.bind(this)
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

    clearInput(){
        this.setState({
            inputs: {
                spellName: "",
                author: "Anonymous",
                school: "Unknown",
                desc: "",
                review: ""
            }
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        let {add, id} = this.props;
        if (add) {
            this.props.submit(this.state.inputs)
        } else {
            console.log()
            this.props.submit(this.state.inputs, id);
        }
        this.clearInput();

    }

    render() {
        let { spellName, author, school, desc, review } = this.props
        return (
            <form onSubmit={this.handleSubmit}>
                <input onChange={this.handleChange} value={spellName} name="spellName" type="text" placeholder="Spell Name" />
                <input onChange={this.handleChange} value={author} name="author" type="text" placeholder="Anonymous" />
                <input onChange={this.handleChange} value={school} name="school" type="text" placeholder="School of Magic" />
                <textarea onChange={this.handleChange} value={desc} name="desc" type="text" placeholder="Description" />
                <textarea onChange={this.handleChange} value={review} name="review" type="text" placeholder="Your Review" />
                <button className="submit" type="submit">Submit</button>
            </form>
        )
    }
}

export default (Form)

