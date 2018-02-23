import React, { Component } from 'react'
import { connect } from "react-redux"
import { updateReview } from '../../../../redux/spellreview';

class Votes extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputs: {
                totalVote: "",
            }
        }
        this.handleClick = this.handleClick.bind(this)
    }
    handleClick = (e) => {
        let { currentReview } = this.props
        console.log(currentReview.totalVoters)
        e.target.name === "plus" ? updateReview((currentReview.totalVoters = currentReview.totalVoters + 1), currentReview) : updateReview((currentReview.totalVoters = currentReview.totalVoters - 1), currentReview)
    }


        render() {
            let { currentReview } = this.props
            return (
                <div>
                    <button name="plus" onClick={this.handleClick}>+</button>
                    <h1>Count: {currentReview.totalVoters}</h1>
                    <button name="minus" onClick={this.handleClick}>-</button>
                </div>
            )
        }
    }


    const mapStateToProps = (state) => {
        return {
            review: state.review
        }
    }
    export default connect(mapStateToProps, { updateReview })(Votes)