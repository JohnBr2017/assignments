import React, { Component } from 'react'

class Character extends Component {
    constructor(props) {
        super(props)
        this.state = {
            playerName: "",
            playerClass: "",
            active: true,
        }
        this.handleChange = this.handleChange.bind(this)
    }
    handleChange(e) { 
        // let {value}= e.target
        this.setState({ 
            active: !this.state.active
        })
        if(this.state.active === true){
        }else{
            return null
        }
}
    
    render() {
        let { playerName, playerClass, characterId, deleteCharacter } = this.props
        return (
            <div>
                <button onClick={() => deleteCharacter(characterId)} >X</button>
                {/* input box to show active player to accept spells */}
                <label>
                    <input onClick={this.handleChange} type="checkbox" value={characterId} className={playerName}  />
                    active player
                </label>
                <h2>{playerName}</h2>
                <h3>{characterId}</h3>
                <h3>{playerClass}</h3>
            </div>
        )
    }
}
export default Character