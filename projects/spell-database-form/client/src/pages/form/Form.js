import React, { Component } from 'react';

import "./form.css"

let classesArray = [];
class Form extends Component {
    constructor(props) {
        super(props)
        this.state = {
            spellName: props.spellName || "",
            description: props.description || [],
            higher_level: props.higher_level || [],
            page: props.page || "",
            range: props.range || "",
            components: props.components || "",
            material: props.material || [],
            ritual: props.ritual || "",
            duration: props.duration || "",
            casting_time: props.casting_time || "",
            level: props.level || "Cantrip",
            school: props.school || "Abjuration",
            classes: props.classes || [],

        }
        this.handleChange = this.handleChange.bind(this)
        this.handleChecked = this.handleChecked.bind(this)
        this.handleArrayChange = this.handleArrayChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.clearInput = this.clearInput.bind(this)
    }
    handleChange = (e) => {
        let { name, value } = e.target;
        this.setState(prevState => {
            return {
                ...prevState.state,
                [name]: value
            }
        })
    }

    handleChecked = (e) => {
        let { name, value, checked } = e.target;
        let { add, edit } = this.props
        let { classes } = this.state
        if (add) {
            if (checked === !true) {
                classesArray.splice(classesArray.indexOf(value), 1)
            } else if (checked === true) {
                classesArray.push(value)
            }
            this.setState((prevState) => {
                return {
                    ...prevState.state,
                    [name]: classesArray
                }
            })
        } else if (edit) {
            console.log("this is edit", edit)
            if (checked === !true) {
                classes.sort()
                classes.splice(classes.indexOf(value), 1)
            } else if (checked === true) {
                classes.push(value)
                classes.sort()
            }
            this.setState((prevState) => {
                console.log(classes, "this is state")
                return {
                    ...prevState.state,
                    [name]: classes
                }
            })
        }
    }

    handleArrayChange = (e) => {
        let { name, value } = e.target
        let vusValue = value.split("\n")
        this.setState((prevState) => {
            return {
                ...prevState.state,
                [name]: vusValue
            }
        })
    }
    clearInput() {
        this.setState({
            spellName: "",
            description: [],
            higher_level: [],
            page: "",
            range: "",
            components: "",
            material: [],
            ritual: "",
            duration: "",
            casting_time: "",
            level: "Cantrip",
            school: "Abjuration",
            classes: [],
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        let { add, _id, edit } = this.props;
        if (add) {
            this.props.submit(this.state)
            this.clearInput();
        } else if (edit) {
            this.props.submit(this.state, _id);
        }
    }
    render() {
        let { spellName, higher_level, page, range, components, material, duration, casting_time, level, school, description } = this.state;

        return (
            <form className="form" onSubmit={this.handleSubmit}>
                <input className="formSpellName" onChange={this.handleChange} value={spellName} name="spellName" placeholder="Spell Name" />
                <textarea className="formDescription" onChange={this.handleArrayChange} value={description} name="description" rows="7" cols="50" placeholder="Description: ***Best used when copy paste straight into box, then typing***" />
                <textarea className="formHigherLevel" onChange={this.handleArrayChange} value={higher_level} name="higher_level" rows="7" cols="50" placeholder="Higher Level: ***Best used when copy paste straight into box, then typing***" />
                <input className="formPage" onChange={this.handleChange} value={page} name="page" placeholder="Page" />
                <input className="formRange" onChange={this.handleChange} value={range} name="range" placeholder="Range" />
                <input className="formComponents" onChange={this.handleChange} value={components} name="components" placeholder="Components" />
                <textarea className="formMaterials" onChange={this.handleArrayChange} value={material} name="material" rows="7" cols="50" placeholder="Materials: ***Best used when copy paste straight into box, then typing***" />
                <div className="formRitual"> Ritual:
                    Yes<input onChange={this.handleChange} checked={this.state.checked} value="Yes" name="ritual" type="radio" />
                    No<input onChange={this.handleChange} checked={this.state.checked} value="No" name="ritual" type="radio" />
                </div>
                <input className="formDuration" onChange={this.handleChange} value={duration} name="duration" placeholder="Duration" />
                <input className="formCastingTime" onChange={this.handleChange} value={casting_time} name="casting_time" placeholder="Casting Time" />
                <div className="formLevel">Level:
                    <select onChange={this.handleChange} name="level" value={level} >
                        <option value={"Cantrip"} >Cantrip</option>
                        <option value={1} >Level 1</option>
                        <option value={2} >Level 2</option>
                        <option value={3} >Level 3</option>
                        <option value={4} >Level 4</option>
                        <option value={5} >Level 5</option>
                        <option value={6} >Level 6</option>
                        <option value={7} >Level 7</option>
                        <option value={8} >Level 8</option>
                        <option value={9} >Level 9</option>
                    </select>
                </div>
                <div className="formSchool"> School:
                    <select onChange={this.handleChange} name="school" value={school.name} >
                        <option value={"Abjuration"} >Abjuration</option>
                        <option value="Conjuration" >Conjuration</option>
                        <option value="Divination" >Divination</option>
                        <option value="Enchantment" >Enchantment</option>
                        <option value="Evocation" >Evocation</option>
                        <option value="Illusion" >Illusion</option>
                        <option value="Necromancy" >Necromancy</option>
                        <option value="Transmutation" >Transmutation</option>
                    </select>
                </div>
                <div className="formClasses">
                    <p className="formClassName">Classes</p>
                    <div className="formClassBard" >
                        Bard<input onChange={this.handleChecked} value={"Bard"} name="classes" type="checkbox" />
                    </div>
                    <div className="formClassCleric" >
                        Cleric<input onChange={this.handleChecked} value={"Cleric"} name="classes" type="checkbox" />
                    </div>
                    <div className="formClassDruid" >
                        Druid<input onChange={this.handleChecked} value={"Druid"} name="classes" type="checkbox" />
                    </div>
                    <div className="formClassPaladin" >
                        Paladin<input onChange={this.handleChecked} value={"Paladin"} name="classes" type="checkbox" />
                    </div>
                    <div className="formClassRanger" >
                        Ranger<input onChange={this.handleChecked} value={"Ranger"} name="classes" type="checkbox" />
                    </div>
                    <div className="formClassSorcerer" >
                        Sorcerer<input onChange={this.handleChecked} value={"Sorcerer"} name="classes" type="checkbox" />
                    </div>
                    <div className="formClassWarlock" >
                        Warlock<input onChange={this.handleChecked} value={"Warlock"} name="classes" type="checkbox" />
                    </div>
                    <div className="formClassWizard" >
                        Wizard<input onChange={this.handleChecked} value={"Wizard"} name="classes" type="checkbox" />
                    </div>
                </div>
                <button className="formSubmit">Submit</button>
            </form>
        );
    }
}

export default Form;