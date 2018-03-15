import React, { Component } from 'react';
import EditForm from "./editForm/index"
import "./singlespell.css"

class CreatedSpells extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hidden: true
        }
        this.toggleDisplay = this.toggleDisplay.bind(this);
    }
    toggleDisplay() {
        this.setState((prevState) => {
            return {
                hidden: !prevState.hidden
            }
        })
    }


    render() {
        let { spellName, description, higher_level, page, range, components, material, ritual, duration, casting_time, level, school, classes, _id, deleteSpell, editSpell } = this.props
        let { hidden } = this.state;
        let spellStyle = { display: hidden ? "none" : "initial" }
        
        return (
            <div className="spellListOnFormSpellBox" >
                <button style={spellStyle} className="spellListOnFormDelete" onClick={() => deleteSpell(_id)} >Delete</button>
                <button onClick={this.toggleDisplay} className="spellListOnFormHideShow">Hid/Show</button>
                <div style={spellStyle} className="spellListOnFormEditForm" >
                    <EditForm editSpell={editSpell} _id={_id} {...this.props} />
                </div>
                <h1 className="spellListOnFormSpellName" >{spellName} </h1>
                <p style={spellStyle} className="spellListOnFormId" >{_id}</p>
                <p style={spellStyle} className="spellListOnFormPage" >Page:{" " + page}</p>
                <p style={spellStyle} className="spellListOnFormRange" >Range:{" " + range}</p>
                <p style={spellStyle} className="spellListOnFormComponents" >Components:{" " + components}</p>
                <p style={spellStyle} className="spellListOnFormMaterial" >Material:{" " + material}</p>
                <p style={spellStyle} className="spellListOnFormRitual" >Ritual:{" " + ritual}</p>
                <p style={spellStyle} className="spellListOnFormDuration" >Duration:{" " + duration}</p>
                <p style={spellStyle} className="spellListOnFormCastingTime" >Casting Time:{" " + casting_time}</p>
                <p style={spellStyle} className="spellListOnFormLevel" >Level:{" " + level}</p>
                <p style={spellStyle} className="spellListOnFormSchool" >School:{" " + school}</p>
                <div style={spellStyle} className="spellListOnFormClasses" >Classes{classes.sort().map((x, i) => <p key={i}>{x}</p>)}</div>
                <div style={spellStyle} className="spellListOnFormDescription" >{description.map((x, i) => <p key={i}>{x}</p>)}</div>
                <div style={spellStyle} className="spellListOnFormHigherLevel" >{higher_level}</div>
            </div>
        );
    }
}



export default (CreatedSpells);