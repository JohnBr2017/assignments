import React, { Component } from 'react';
import EditForm from "./editForm/index"

class CreatedSpells extends Component {

    render() {
        let { spellName, description, higher_level, page, range, components, material, ritual, duration, casting_time, level, school, classes, _id, deleteSpell, editSpell } = this.props
        return (
            <div>
                <button onClick={() => deleteSpell(_id)} >Delete</button>
                <EditForm editSpell={editSpell} _id={_id} {...this.props} /> 
                <h1>{spellName} </h1>
                <h2>{_id}</h2>
                <p>Page:{page}</p>
                <p>Range:{range}</p>
                <p>Components:{components}</p>
                <p>Material:{material}</p>
                <p>Ritual:{ritual}</p>
                <p>Duration:{duration}</p>
                <p>Casting Time:{casting_time}</p>
                <p>Level:{level}</p>
                <p>School:{school}</p>
                <div>Classes{classes.sort().map((x, i) => <p key={i}>{x}</p>)}</div>
                <div>Description:{description.map((x, i) => <p key={i}>{x}</p>)}</div>
                <div>Higher Level:{higher_level}</div>
            </div>
        );
    }
}



export default (CreatedSpells);