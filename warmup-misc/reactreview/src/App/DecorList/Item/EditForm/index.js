import React, { Component } from 'react';
import Form from "../../Form";

class EditForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hidden: true
        }
        this.toggleDisplay = this.toggleDisplay.bind(this);
    }
    toggleDisplay() {
        this.setState((prevState) => {
            return {
                hidden: !prevState.hidden
            }
        })
    }

    render() {
        let { hidden } = this.state;
        let { editItem, index } = this.props;
        let formStyle = { display: hidden ? "none" : "initial" }
        return (
            <div>
                <button onClick={this.toggleDisplay}>Edit</button>
                <div style={formStyle}>
                    <Form submit={editItem}{...this.props}></Form>
                </div>
            </div>
        )
    }
}

export default EditForm;