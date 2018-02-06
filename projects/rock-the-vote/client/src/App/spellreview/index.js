import React, { Component } from 'react';
import { connect } from "react-redux";

import { getSpellReview } from "../../redux/spellreview.js";
import SingleReview from "./singleReview"



class SpellReview extends Component {
    componentDidMount() {
        this.props.getSpellReview();
    }

    render() {
        let { loading, data } = this.props;
        console.log(this.props);
        return (
            loading ?
                <div>...loading</div>
                :
                <div>
                    {data.map((singleReview, i)=>{
                        let { spellName, school, desc, review, upVotes, downVotes, totalVoters, author }=singleReview;
                        return <SingleReview key={i} spellName={spellName} author={author} school={school} desc={desc} review={review} upVotes={upVotes} downVotes={downVotes} totalVoters={totalVoters} ></SingleReview>
                    })}
                </div>
        )
    }
}

const mapStateToProps = (state) => {
    return state.spellReviews
}

export default connect(mapStateToProps, { getSpellReview })(SpellReview)
