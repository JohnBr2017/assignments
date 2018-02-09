import React, { Component } from 'react'

class Character extends Component {
    constructor(props){
        super(props)
        this.state ={
            playerName: "",
            playerClass: ""
        }
    }
    render() {
        let {playerName, playerClass, id, deleteCharacter}= this.props
        return (
            <div>
            <button onClick={()=>deleteCharacter(id)} >X</button>
            {/* input box to show active player to accept spells */}
            <input type="checkbox" name="active" />
                <h2>{playerName}</h2>
                <h3>{playerClass}</h3>
            </div>
        )
    }
}
export default  Character