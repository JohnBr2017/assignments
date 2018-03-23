import React, { Component } from 'react';
import { connect } from "react-redux";

import { getReview, addReview, deletedReview } from "../../redux/spellreview.js";
import SingleReview from "./singleReview"
import Form from "../shared/Form"




class SpellReview extends Component {
    constructor(props) {
        super(props);
        this.formSubmit = this.formSubmit.bind(this)
        this.deleteReview = this.deleteReview.bind(this)
    }
    formSubmit(newSpell) {
        this.props.addReview(newSpell);
    }

    componentDidMount() {
        this.props.getReview();
    }
    deleteReview(id) {
        this.props.deletedReview(id)
    }

    render() {
        let { loading, data } = this.props;
        return (
            loading ?
                <div>...loading</div>
                :
                <div>
                    <Form clear add submit={this.formSubmit}></Form>
                    {data.map((singleReview, i) => {
                        let { spellName, school, desc, review, upVotes, downVotes, totalVoters, author, _id, comments } = singleReview;
                        return <SingleReview key={i} comments={comments} spellName={spellName} author={author} school={school} desc={desc} review={review} upVotes={upVotes} downVotes={downVotes} totalVoters={totalVoters} id={_id} deleteReview={this.deleteReview} ></SingleReview>
                    })}

                </div>
        )
    }
}

const mapStateToProps = (state) => {
    return state.spellReviews
}

export default connect(mapStateToProps, { getReview, addReview, deletedReview })(SpellReview)
