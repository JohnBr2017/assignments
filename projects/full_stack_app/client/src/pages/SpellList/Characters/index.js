import React, { Component } from "react";

import { connect } from "react-redux";

import { getPlayerList, addNewCharacter, deletedCharacter } from "../../../redux/player";
import Character from "./Character"
import Form from "./CharForm"

class Characters extends Component {
    constructor() {
        super();
        this.state = {

        };
        this.formSubmit = this.formSubmit.bind(this)
        this.deleteCharacter = this.deleteCharacter.bind(this)
    }
    formSubmit(newPlayer) {
        console.log(newPlayer)
        this.props.addNewCharacter(newPlayer);
        // this.props.getPlayerList();
    }
    componentDidMount() {
        this.props.getPlayerList();
    }
    deleteCharacter(id){
        this.props.deletedCharacter(id);
    }

    render() {
        let { playerList } = this.props;
        // console.log(playerList)
        return (
                <div>
                    <Form add clear submit={this.formSubmit}></Form>
                    {playerList.map((player, i) => {
                            let { playerName, playerClass, _id } = player;
                            return <Character key={i} playerName={playerName} playerClass={playerClass} characterId={_id} deleteCharacter={this.deleteCharacter} ></Character>
                        })
                    }
                </div>
        )
    }
}




const mapStateToProps = (state) => {
    return {
        playerList: state.players,
    }
}

export default connect(mapStateToProps, { getPlayerList, addNewCharacter, deletedCharacter })(Characters);
