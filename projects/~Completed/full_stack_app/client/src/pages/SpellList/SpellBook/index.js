import React, { Component } from "react";

import { connect } from "react-redux";

import { getSpellList } from "../../../redux/spells";
import { filterSpellList } from "../../../redux/filter";
import Spell from "./Spell";
import "./spellsection.css"

class SpellBook extends Component {
    constructor() {
        super();
        this.state = {
            school: "all",
            level: 10,
            classes: "all",

        };
        this.filterClass = this.filterClass.bind(this)
        this.filterLevel = this.filterLevel.bind(this)
        this.filterSchool = this.filterSchool.bind(this)
    }
    componentDidMount() {
        this.props.getSpellList();
    }
    filterSchool = (e) => {
        let { value } = e.target;
        this.setState({ school: value });
        // this.props.filterSpellList(value)
    }
    filterLevel = (e) => {
        let { value } = e.target;
        value = Number(value);
        this.setState({ level: value });
    }
    filterClass = (e) => {
        let { value } = e.target;
        this.setState({ classes: value });
    }

    render() {
        let { spellList } = this.props;
        
        return (
            <div className="book">
                <div className="spellOptions">
                    <select className="classSelection" onChange={this.filterClass}>
                        <option value="all">Class</option>
                        <option value="Bard">Bard</option>
                        <option value="Cleric">Cleric</option>
                        <option value="Druid">Druid</option>
                        <option value="Paladin">Paladin</option>
                        <option value="Ranger">Ranger</option>
                        <option value="Sorcerer">Sorcerer</option>
                        <option value="Warlock">Warlock</option>
                        <option value="Wizard">Wizard</option>
                    </select>
                    <select className="levelSelection" onChange={this.filterLevel}>
                        <option value={10}>Spell Level</option>
                        <option value="0">Cantrip</option>
                        <option value="1">Level: 1</option>
                        <option value="2">Level: 2</option>
                        <option value="3">Level: 3</option>
                        <option value="4">Level: 4</option>
                        <option value="5">Level: 5</option>
                        <option value="6">Level: 6</option>
                        <option value="7">Level: 7</option>
                        <option value="8">Level: 8</option>
                        <option value="9">Level: 9</option>
                    </select>
                    <select className="schoolSelection" onChange={this.filterSchool}>
                        <option value="all">School</option>
                        <option value="Abjuration">Abjuration</option>
                        <option value="Conjuration">Conjuration</option>
                        <option value="Divination">Divination</option>
                        <option value="Enchantment">Enchantment</option>
                        <option value="Evocation">Evocation</option>
                        <option value="Illusion">Illusion</option>
                        <option value="Necromancy">Necromancy</option>
                        <option value="Transmutation">Transmutation</option>
                    </select>
                </div>
                <div className="spellBook">
                    {spellList
                        .map((spell, i) => {
                            let { name, desc, higher_level, page, range, components, material, ritual, duration, concentration, casting_time, level, school, classes, _id } = spell;
                            return <Spell key={i} name={name} desc={desc} higher_level={higher_level} page={page} range={range} components={components} material={material} ritual={ritual} duration={duration} concentration={concentration} casting_time={casting_time} level={level} school={school.name} classes={classes} schoolFilter={this.state.school} levelFilter={this.state.level} classFilter={this.state.classes} spellId={_id} oneSpell={spell}
                            ></Spell>
                        })}
                </div>
            </div>
        )
    }
}




const mapStateToProps = (state) => {
    return {
        spellList: state.spells,
    }
}

export default connect(mapStateToProps, { getSpellList, filterSpellList })(SpellBook);
