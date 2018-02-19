import React, { Component } from 'react'
import { getSpellById } from "../../../../../redux/spells";
import { connect } from "react-redux"
import "./characterSpell.css"

class CharacterSpells extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {
        let { name, desc, higher_level, page, range, components, material, ritual, duration, concentration, casting_time, level, school
            // , classes
            // , spellId
            // , deleteSpell 
        } = this.props
        return (
            <div className="spell">
                {/* <button onClick={() => deleteSpell(spellId)} >X</button> */}
                <h1 className="name">{name}</h1>
                {/* <h2>{spellId}</h2> */}
                <p className="page">{page}</p>
                <p className="range">{range}</p>
                <p className="components">{components}</p>
                <p className="ritual">{ritual}</p>
                <p className="duration">{duration}</p>
                <p className="concentration">{concentration}</p>
                <p className="casting_time">{casting_time}</p>
                <p className="level">{level}</p>
                <p className="school">{school}</p>
                {/* <div className="classes">{classes.map((x, i) => <p key={i}>{x.name}</p>)}</div> */}
                <p className="material">{material.replace(/â€™/g, "'").replace(/â€œ/g, '"').replace(/â€�/g, '"').replace(/â€”/g, "-").replace(/â€“/g, "-").replace(/â€‹/g, "")}</p>
                <div className="desc">{desc.map((x, i) => <p key={i}>{x.replace(/â€™/g, "'").replace(/â€œ/g, '"').replace(/â€�/g, '"').replace(/â€”/g, "-").replace(/â€“/g, "-").replace(/â€‹/g, "")}</p>)}</div>
                <div className="higher_level">{higher_level.map((x, i) => <p key={i}>{x.replace(/â€™/g, "'").replace(/â€œ/g, '"').replace(/â€�/g, '"').replace(/â€”/g, "-").replace(/â€“/g, "-").replace(/â€‹/g, "")}</p>)}</div>
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        spells: state.spells,
    }
}

export default connect(mapStateToProps, { getSpellById })(CharacterSpells);