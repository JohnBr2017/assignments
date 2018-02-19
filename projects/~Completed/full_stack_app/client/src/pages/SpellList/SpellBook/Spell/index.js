import React, { Component } from 'react'
import { connect } from "react-redux"
import { getSpellById } from "../../../../redux/spells";
import { getPlayerList, addSpell } from "../../../../redux/player"
import "./spell.css"


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
    }
    handleSpell(spell) {
        let { playerList } = this.props;
        console.log(spell)
        for (let i = 0; i < playerList.length; i++) {
            if (playerList[i].active === true) {
                this.props.addSpell(playerList[i], spell)
            }
        }
    }


    render() {
        // let {active}= this.state
        let { name, desc, higher_level, page, range, components, material, ritual, duration, concentration, casting_time, level, school, classes, schoolFilter, levelFilter, classFilter
            , spellId
        } = this.props;
        // console.log(oneSpell)
        let filtClass = classes.map(c => c.name)
        if ((schoolFilter === school || schoolFilter === "all")
            && (levelFilter === level || levelFilter === 10)
            && (filtClass.includes(classFilter) || classFilter === "all")
        ) {
            return (
                <div className="spell">
                    <h1 className="name">{name}
                    <button className="addButton" onClick={() => this.handleSpell(this.props.oneSpell)} value={spellId}>add spell to player</button>
                    </h1>
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

export default connect(mapStateToProps, { getSpellById, getPlayerList, addSpell })(Spell)