import React, { Component } from 'react'

class Votes extends Component {
    constructor(props){
        super(props);
        this.state ={
            inputs:{
                upVote: "",
                downVote: "",
                totalVote: "",
                standingVotes: ""
            }
        }
    }
    render() {
        return (
            <div>
                <button>upvote</button>
                <button>downvote</button>
                <span>total votes</span>
                <span>standing on votes</span>
            </div>
        )
    }
}


export default Votes