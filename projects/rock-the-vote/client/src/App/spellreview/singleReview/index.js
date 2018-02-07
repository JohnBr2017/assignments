import React, { Component } from 'react'
import { getSpellReview, addSpellReview, deletedSpellReview } from "../../../redux/spellreview"
import { connect } from "react-redux"


class SingleReview extends Component {
    constructor(props) {
        super(props);
        this.formSubmit = this.formSubmit.bind(this)
    }
    formSubmit(newSpell) {
        this.props.addSpellReview(newSpell);
    }

    render() {
        let { id, deleteReview, spellName, school, desc, review, upVotes, downVotes, totalVoters, author } = this.props
        return (
            <div>
                <div>
                <button onClick={() => deleteReview(id)}>X</button>
                    <h1>{spellName}</h1>
                    <h2>{author}</h2>
                    <h2>{school}</h2>
                    <p>{desc}</p>
                    <p>{review}</p>
                    <div>Up Votes:{upVotes} Down Votes: {downVotes}</div>
                    <div>Total Voted: {totalVoters}</div>
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        spellreview: state.spellreview
    }
}
export default connect(mapStateToProps, { getSpellReview, addSpellReview, deletedSpellReview })(SingleReview)