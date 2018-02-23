import React, { Component } from 'react';
import { connect } from "react-redux";
import { updateReview } from "../../../../redux/spellreview"


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
        let { currentReview, id } = this.props;
        let { comment } = this.state;
        currentReview.comments.push(comment);
        this.props.updateReview(currentReview, id);
        this.clearInput();
    }
    render() {
        let {comments} =this.props.currentReview
        let {id }= this.props
        return (
            <div>
                {comments.map((comment, i)=>{
                    return <p id={id} key={i}>{comment}</p>
                })}
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

export default connect(mapStateToProps, { updateReview })(Comments)
