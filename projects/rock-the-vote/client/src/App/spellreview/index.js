import React, { Component } from 'react';
import { connect } from "react-redux";

import { getSpellReview, addSpellReview, deletedSpellReview } from "../../redux/spellreview.js";
import SingleReview from "./singleReview"
import Form from "../shared/Form"




class SpellReview extends Component {
    constructor(props) {
        super(props);
        this.formSubmit = this.formSubmit.bind(this)
        this.deleteReview = this.deleteReview.bind(this)
    }
    formSubmit(newSpell) {
        this.props.addSpellReview(newSpell);
    }

    componentDidMount() {
        this.props.getSpellReview();
    }
    deleteReview(id) {
        this.props.deletedSpellReview(id)
    }

    render() {
        let { loading, data } = this.props;
        console.log(data);
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

export default connect(mapStateToProps, { getSpellReview, addSpellReview, deletedSpellReview })(SpellReview)
