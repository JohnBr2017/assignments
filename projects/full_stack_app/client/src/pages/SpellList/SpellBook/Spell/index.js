import React, { Component } from 'react'

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

    render() {
        let { name, desc, higher_level, page, range, components, material, ritual, duration, concentration, casting_time, level, school, classes, schoolFilter, levelFilter, classFilter, id } = this.props;
        let filtClass = classes.map(c => c.name)
        if ((schoolFilter === school || schoolFilter === "all")
            && (levelFilter === level || levelFilter === 10)
            && (filtClass.includes(classFilter) || classFilter === "all")
        ) {
            return (
                <div>
                    {/* spell adder */}
                    <button value={id} >spell to add to active player</button>
                    <h1>{name}</h1>
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
        }else {
            return null
        }
    }
}

export default Spell;