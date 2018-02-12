import React, { Component } from 'react'
import { connect } from "react-redux"
import { getSpellById } from "../../../../redux/spells";
import { getPlayerList } from "../../../../redux/player"


class Spell extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            desc: [],
            higher_level: [],
            page: "",
            range: "",
            components: "",
            material: "",
            ritual: "",
            duration: "",
            concentration: "",
            casting_time: "",
            level: "",
            school: "",
            classes: ""
        } 
        // this.handleChange =  this.handleChange.bind(this)
    }

    // handleChange() {
    //     if()
    // }

    render() {
        let {acitve}= this.state
        let { name, desc, higher_level, page, range, components, material, ritual, duration, concentration, casting_time, level, school, classes, schoolFilter, levelFilter, classFilter, spellId, playerList } = this.props;
        console.log(acitve)
        console.log(playerList)
        let filtClass = classes.map(c => c.name)
        if ((schoolFilter === school || schoolFilter === "all")
            && (levelFilter === level || levelFilter === 10)
            && (filtClass.includes(classFilter) || classFilter === "all")
        ) {
            return (
                <div>
                    <button onClick={this.handleChange} value={spellId}>add spell to player</button>
                    <h1>{name}</h1>
                    <h2>{spellId}</h2>
                    <p>{page}</p>
                    <p>{range}</p>
                    <p>{components}</p>
                    <p>{ritual}</p>
                    <p>{duration}</p>
                    <p>{concentration}</p>
                    <p>{casting_time}</p>
                    <p>{level}</p>
                    <p>{school}</p>
                    <div>{classes.map((x, i) => <p key={i}>{x.name}</p>)}</div>
                    <p>{material.replace(/â€™/g, "'").replace(/â€œ/g, '"').replace(/â€�/g, '"').replace(/â€”/g, "-").replace(/â€“/g, "-").replace(/â€‹/g, "")}</p>
                    <div>{desc.map((x, i) => <p key={i}>{x.replace(/â€™/g, "'").replace(/â€œ/g, '"').replace(/â€�/g, '"').replace(/â€”/g, "-").replace(/â€“/g, "-").replace(/â€‹/g, "")}</p>)}</div>
                    <div>{higher_level.map((x, i) => <p key={i}>{x.replace(/â€™/g, "'").replace(/â€œ/g, '"').replace(/â€�/g, '"').replace(/â€”/g, "-").replace(/â€“/g, "-").replace(/â€‹/g, "")}</p>)}</div>
                </div>

            )
        } else {
            return null
        }
    }
}

const mapStateToProps = (state) => {
    return {
        singleSpell: state.spell,
        playerList: state.players
    }
}

export default connect(mapStateToProps, { getSpellById, getPlayerList })(Spell)