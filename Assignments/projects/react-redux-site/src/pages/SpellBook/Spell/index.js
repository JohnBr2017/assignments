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
            level: "",
            school: "",
            classes: "",
            subclasses: ""
        }
    }
    componentDidMount() {
        axios.get(this.props.url)
            .then((response) => {
                let results = response.data;
                console.log(results.desc)
                this.setState({
                    desc: results.desc,
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
                    classes: results.classes[0].name,
                    subclasses: results.subclasses.name
                })
            })
            .catch((err) => {
                console.error(err);
            })
    }
    render() {
        let { name } = this.props;
        let { page, range, components, material, ritual, duration, concentration, casting_time, level, school, desc, higher_level } = this.state;
        return (
            <div className="spells" >
                <h1 className="name" >{name}</h1>
                <p className="page" >Page: {page}</p>
                <p className="range" >Range: {range}</p>
                <p className="components" >Components: {components}</p>
                <p className="materials" >Materials: {material.replace(/[^\w\d\s\.\-\"\,\?\:\;]/g, "")}</p>
                <p className="rituals" >Rituals: {ritual}</p>
                <p className="duration" >Duration: {duration}</p>
                <p className="concentration" >Concentration: {concentration}</p>
                <p className="castingTime" >Casting Time: {casting_time}</p>
                <p className="level" >Level: {level}</p>
                <p className="school" >{school}</p>
                <div className="description">{desc.map(x => <p>{x.replace(/[^\w\d\s\.\-\"\,\?\:\;]/g, "")}</p>)}</div>
                <p className="higher_level" >HL: {higher_level.join("\n").replace(/[^\w\d\s\.\-\"\,\?\:\;]/g, "")}</p>
            </div>
        )
    }
}



export default Spell; 