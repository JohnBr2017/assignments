import React, { Component } from 'react';
import Form from "../../../form/Form";
import {connect} from "react-redux";
import { editedSpell } from "../../../../redux/spells"

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
        let { editSpell, _id } = this.props;
        let formStyle = { display: hidden ? "none" : "initial" }
        return (
            <div>
                <button onClick={this.toggleDisplay}>Edit</button>
                <div style={formStyle}>
                    <Form edit submit={editSpell} _id={_id} {...this.props}></Form>
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state) =>{
    return {
        spells: state.spells
    }
}

export default connect(mapStateToProps, {editedSpell} )(EditForm);