import React, { Component } from 'react'

class SingleReview extends Component {
    render() {
        let { spellName, school, desc, review, upVotes, downVotes, totalVoters, author } = this.props
        return (
            <div>
                <div>
                    <h1>{spellName}</h1>
                    <h2>{author}</h2>
                    <h2>{school}</h2>
                    <p>{desc}</p>
                    <p>{review}</p>
                    <div>Up Votes:{upVotes} Down Votes: {downVotes}</div>
                    <div>Total Voted: {totalVoters}</div>
                    {/* <Form></Form> */}
                </div>
            </div>
        )
    }
}
export default SingleReview