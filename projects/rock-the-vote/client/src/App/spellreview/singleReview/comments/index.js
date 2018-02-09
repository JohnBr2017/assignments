import React, { Component } from 'react';
import { connect } from "react-redux";
import { updateSpellReview } from "../../../../redux/spellreview"


class Comments extends Component {
    constructor(props) {
        super(props);
        this.state = {
            comment: ""
        }
        this.handleChange = this.handleChange.bind(this);
        this.submitComment = this.submitComment.bind(this);
        this.clearInput = this.clearInput.bind(this)
    }
    handleChange(e) {
        let { value } = e.target;
        this.setState({
            comment: value
        })
    }
    clearInput() {
        this.setState({
            comment: ''
        })
    }
    submitComment(e) {
        e.preventDefault();
        let { currentReview } = this.props;
        let { comment } = this.state;
        currentReview.comments.push(comment);
        this.props.updateSpellReview(currentReview);
        console.log(currentReview)
        this.clearInput();
    }
    render() {
        let {comment} =this.state
        return (
            <div>
                <div>{comment}</div>
                <form onSubmit={this.submitComment} >
                    <textarea onChange={this.handleChange} type="text" value={this.state.comment} placeholder="test"></textarea>
                    <button>Post</button>
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return { spellreviews: state.spellreviews }
}

export default connect(mapStateToProps, { updateSpellReview })(Comments)
