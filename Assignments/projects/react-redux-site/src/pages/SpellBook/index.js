import React, { Component } from "react";

import { connect } from "react-redux";

import { getSpellList } from "../../redux/spells.js";
import { getFilteredSpell} from "../../redux/filter";
import Spell from "./Spell";
import "./spellbook.css";

class SpellBook extends Component {
    componentDidMount() {
        this.props.getSpellList();
    }

    handleChange(e){

    }

    render() {
        let { spellList } = this.props;
        return (
            <div>
                <div className="spellOptions">
                    <select>
                        <option value="noClass">Class</option>
                        <option value="Bard">Bard</option>
                        <option value="Cleric">Cleric</option>
                        <option value="Druid">Druid</option>
                        <option value="Paladin">Paladin</option>
                        <option value="Ranger">Ranger</option>
                        <option value="Sorcerer">Sorcerer</option>
                        <option value="Warlock">Warlock</option>
                        <option value="Wizard">Wizard</option>
                    </select>
                    <select>
                        <option value="noLevel">Spell Level</option>
                        <option value="0">0</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                    </select>
                    <select>
                    <option value="noSchool">School</option>
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
                <div className="spellBook" >
                {/* add filter before map */}
                    {spellList.map((spell, i) => {
                        let { url, name } = spell;
                        return <Spell key={i} name={name} url={url}>{name}</Spell>
                    })}
                </div>
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        spellList: state.spells,
        filter: state.filter
    }
}

export default connect(mapStateToProps, { getSpellList, getFilteredSpell })(SpellBook);










//     render() {
//         const spellList = this.props.spellList.map(spell => <h1 key={spell.name}>{spell.name} </h1>)
//         return (
//             <div>
//                 {spellList}
//             </div>
//         )
//     }
// }



// import React, { Component } from 'react';

// import Spell from "./Spell";

// import axios from "axios";
// const spUrl = "http://dnd5eapi.co/api/spells";

// class SpellBook extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             spells: [],
//         }
//     }
//     componentDidMount() {
//         axios.get(spUrl)
//             .then((response) => {
//                 let { results } = response.data;
//                 this.setState({
//                     spells: results
//                 })
//             })
//             .catch((err) => {
//                 console.error(err);
//             })
//     }
//     render() {
//         let { spells } = this.props;
//         return (
//             <div>
//                 {spells.map((spell, i) => {
//                     let { url, name } = spell;
//                     return <Spell key={i} name={name} url={url}></Spell>
//                 })}
//             </div>
//         )
//     }
// }


// export default SpellBook