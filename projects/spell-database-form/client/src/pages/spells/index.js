import React, { Component } from 'react';

import { connect } from "react-redux";

import { addNewSpell, getSpellList, deletedSpell, editedSpell } from "../../redux/spells"
import Form from "../form/Form"
import CreatedSpells from "./spell/index"
import "./spellmain.css"

class AllSpells extends Component {
    constructor() {
        super();
        this.state = {
        }
        this.addSpell = this.addSpell.bind(this)
        this.deleteSpell = this.deleteSpell.bind(this)
        this.editSpell = this.editSpell.bind(this)
    }
    componentDidMount() {
        this.props.getSpellList();
    }
    addSpell(newSpell) {
        this.props.addNewSpell(newSpell);
    }
    deleteSpell(id) {
        this.props.deletedSpell(id);
    }
    editSpell(alteredSpell, id) {
        this.props.editedSpell(alteredSpell, id)
    }
    render() {
        let { spellList } = this.props
        return (
            <div>
                <div className="mainForm">
                    <Form add submit={this.addSpell} />
                </div>
                <div>
                    {spellList
                        .sort((a, b) => a.description !== b.description ? a.description < b.description ? -1 : 1 : 0)
                        // .sort((a, b) => a.spellName !== b.spellName ? a.spellName.toLowerCase() < b.spellName.toLowerCase() ? -1 : 1 : 0)
                        .map((spell, i) => {
                            let { spellName, description, higher_level, page, range, components, material, ritual, duration, casting_time, level, school, classes, _id } = spell;
                            return <CreatedSpells spellName={spellName} description={description} higher_level={higher_level} page={page} range={range} components={components} material={material} ritual={ritual} duration={duration} casting_time={casting_time} level={level} school={school} classes={classes} key={i} _id={_id} deleteSpell={this.deleteSpell} editSpell={this.editSpell} > </CreatedSpells>
                        })}
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        spellList: state.spells,
    }
}

export default connect(mapStateToProps, { addNewSpell, getSpellList, deletedSpell, editedSpell })(AllSpells);