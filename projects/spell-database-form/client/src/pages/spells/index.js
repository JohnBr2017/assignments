import React, { Component } from 'react';

import { connect } from "react-redux";

import { addNewSpell, getSpellList } from "../../redux/spells"
import Form from "../form/Form"
import CreatedSpells from "./spell/index"

class AllSpells extends Component {
    constructor() {
        super();
        this.state = {
        }
        this.addSpell = this.addSpell.bind(this)
    }
    componentDidMount() {
        this.props.getSpellList();
    }
    addSpell(newSpell) {
        this.props.addNewSpell(newSpell);
    }

    render() {
        let { spellList }= this.props
        console.log(spellList)
        return (
            <div>
                <div>
                    <Form add submit={this.addSpell} />
                </div>
                <div>
                    {spellList.map((spell, i) => {
                        let { spellName, description, higher_level, page, range, components, material, ritual, duration, casting_time, level, school, classes, _id } = spell;                        
                        return <CreatedSpells spellName={spellName} description={description} higher_level={higher_level} page={page} range={range} components={components} material={material} ritual={ritual} duration={duration} casting_time={casting_time} level={level} school={school} classes={classes} key={i} _id={_id} > </CreatedSpells>
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

export default connect(mapStateToProps, { addNewSpell, getSpellList })(AllSpells);