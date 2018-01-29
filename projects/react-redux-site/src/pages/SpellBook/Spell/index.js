import React, { Component } from 'react'

import axios from "axios"

import "./spell.css"


class Spell extends Component {
    constructor(props) {
        super(props);
        this.state = {
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
            level: "all",
            school: "",
            classes1: "",
            classes2: "",
            classes3: "",
            classes4: "",
            classes5: "",
            classes6: "",
            subclasses: ""
        }

    }
    componentDidMount() {
        axios.get(this.props.url)
            .then((response) => {
                let results = response.data;
                this.setState({
                    isHidden: true,
                    desc: results.desc || "",
                    higher_level: results.higher_level || [],
                    page: results.page,
                    range: results.range,
                    components: results.components || "none",
                    material: results.material || "",
                    ritual: results.ritual,
                    duration: results.duration,
                    concentration: results.concentration,
                    casting_time: results.casting_time,
                    level: results.level,
                    school: results.school.name,
                    classes1: results.classes[0] || "",
                    classes2: results.classes[1] || "",
                    classes3: results.classes[2] || "",
                    classes4: results.classes[3] || "",
                    classes5: results.classes[4] || "",
                    classes6: results.classes[5] || "",
                    subclasses: results.subclasses.name
                })
            })
            .catch((err) => {
                console.error(err);
            });
    }
    render() {
        let { name, schoolFilter, levelFilter, classFilter } = this.props;
        let { classes1, classes2, classes3, classes4, classes5, classes6, page, range, components, material, ritual, duration, concentration, casting_time, school, level, desc, higher_level } = this.state;
        if ((schoolFilter === school || schoolFilter === "all")
            && (levelFilter === level || levelFilter === 10)
            && (classFilter === classes1.name
                || classFilter === classes2.name
                || classFilter === classes3.name
                || classFilter === classes4.name
                || classFilter === classes5.name
                || classFilter === classes6.name
                || classFilter === "all"
            )
        ) {
            return (
                    <div className="spells" >
                        <h1 className="name" >{name}</h1>
                        <p className="page" >Pg: {page}</p>
                        <p className="range" >Range: {range}</p>
                        <p className="components" >Components: {components}</p>
                        <p className="materials" >Materials: {material.replace(/â€™/g, "'").replace(/â€œ/g, '"').replace(/â€�/g, '"').replace(/â€”/g, "-").replace(/â€“/g, "-").replace(/â€‹/g, "")}</p>
                        {/* <p className="materials" >Materials: {material.replace(/[^\w\d\s\.\-\"\,\?\:\;]/g, "")}</p> */}
                        <p className="rituals" >Rituals: {ritual}</p>
                        <p className="duration" >Duration: {duration}</p>
                        <p className="concentration" >Concentration: {concentration}</p>
                        <p className="castingTime" >Casting Time: {casting_time}</p>
                        <p className="level" >Level: {level}</p>
                        <p className="school" >{school}</p>
                        {/* currently causing problems conflics with hieght size of .spells css */}
                        <div className="description">{desc.map((x) => <p >{x.replace(/â€™/g, "'").replace(/â€œ/g, '"').replace(/â€�/g, '"').replace(/â€”/g, "-").replace(/â€“/g, "-").replace(/â€‹/g, "")}</p>)}</div>
                        {/* <div className="description">{desc.map(x => <p>{x.replace(/[^\w\d\s\.\-\"\,\?\:\;]/g, "")}</p>)}</div> */}
                        {/* <p className="description" >{desc.join("\n").replace(/â€™/g, "'").replace(/â€œ/g, '"').replace(/â€�/g, '"').replace(/â€”/g, "-").replace(/â€“/g, "-").replace(/â€‹/g, "")}</p> */}
                        <p className="higher_level" >HL: {higher_level.join("\n").replace(/â€™/g, "'").replace(/â€œ/g, '"').replace(/â€�/g, '"').replace(/â€”/g, "-").replace(/â€“/g, "-").replace(/â€‹/g, "")}</p>
                        {/* <p className="higher_level" >HL: {higher_level.join("\n").replace(/[^\w\d\s\.\-\"\,\?\:\;]/g, "")}</p> */}
                    </div>

            )
        } else {
            return null;
        }

    }
}



export default Spell;

