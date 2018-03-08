import React, { Component } from 'react'
import { inputChange, getPlayerList } from "../../../../redux/player"
import { getSpellById, deletedSpell } from "../../../../redux/spells"
import { connect } from "react-redux"
import CharacterSpells from "./CharacterSpells"
import "./character.css"

class Character extends Component {
    constructor(props) {
        super(props)
        this.state = {
            playerName: "",
            playerClass: "",
        }
        this.handleChange = this.handleChange.bind(this)
    }
    deleteSpell(id) {
        this.props.deletedSpell(id);
    }
    handleChange(player) {
        player.active = !player.active
        this.props.inputChange(player._id, player);
    }

    render() {
        let { playerName, playerClass, characterId, deleteCharacter, isActive, player, listOfSpells } = this.props
        console.log(isActive)
        return (
            <div className="characterSection">
                <button className="deleteButton" onClick={() => deleteCharacter(characterId)} >X</button>
                <label className="activeCheckbox">
                    <input onChange={() => this.handleChange(player)} type="checkbox" className={playerName} checked={isActive} />
                    active player</label>
                <h2 className="playerName">{playerName}</h2>
                {/* <h3>{characterId}</h3> */}
                <h3 className="playerClass">{playerClass}</h3>
                <div className="playerSpells">
                    {listOfSpells.map((spell, i) => {
                        let { name, desc, higher_level, page, range, components, material, ritual, duration, concentration, casting_time, level, school, classes, _id } = spell
                        console.log(listOfSpells)
                        return <CharacterSpells key={i} name={name} desc={desc} higher_level={higher_level} page={page} range={range} components={components} material={material} ritual={ritual} duration={duration} concentration={concentration} casting_time={casting_time} level={level} school={school.name} classes={classes} spellId={_id} deletedSpell={this.deleteSpell}> right here </CharacterSpells>
                    })
                    }
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        active: state.active,
        playerList: state.players
    }
}

export default connect(mapStateToProps, { inputChange, getPlayerList, getSpellById, deletedSpell })(Character)
