import React, { Component } from "react";
import { connect } from "react-redux";
import { addUgly } from "../redux/uglies"


class Form extends Component {
    constructor(props) {
        super(props);
        let { url, title, description } = props;
        this.state = {
            inputs: {
                url: url || "",
                titel: title || "",
                description: description || ""
            }
        }
        this.addUgly = this.addUgly.bind(this);
    }

    addUgly(e) {
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

    render() {
        let { url, title, description } = this.state.inputs
        return (
            <form >
                <input onChange={addUgly} name="url" value={url} placeholder="image url" type="text" />
                <input onChange={addUgly} name="title" value={title} placeholder="title" type="text" />
                <input onChange={addUgly} name="description" value={description} placeholder="description" type="text" />
                <button>Submit</button>
            </form>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        uglies: state.uglies
    }
}

export default connect(mapStateToProps, { addUgly })(Form)



