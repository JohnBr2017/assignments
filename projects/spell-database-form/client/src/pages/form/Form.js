import React, { Component } from 'react';


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
            classes: props.classes || [""],
            
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
        if (checked === !true) {
            classesArray.splice(value, 1)
        } else if (checked === true) {
            classesArray.push(value)
        }
        this.setState((prevState) => {
            return {
                ...prevState.state,
                [name]: classesArray
            }
        })
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
            classes: [""],
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        let { add, _id, edit } = this.props;
        if (add) {
            this.props.submit(this.state)
            this.clearInput();
        } else if(edit) {
            this.props.submit(this.state, _id);
        }
    }
    render() {
        let { spellName, higher_level, page, range, components, material, duration, casting_time, level, school, description } = this.state;
        return (
            <form onSubmit={this.handleSubmit}>
                <div> Spell Name<br />
                    <input onChange={this.handleChange} value={spellName} name="spellName" />
                </div>
                <div> Description ***Best used when copy paste straight into box, then typing***<br />
                    <textarea onChange={this.handleArrayChange} value={description} name="description" rows="10" cols="50" />
                </div>
                <div> Higher Level ***Best used when copy paste straight into box, then typing***<br />
                    <textarea onChange={this.handleArrayChange} value={higher_level} name="higher_level" rows="10" cols="50" />
                </div>
                <div> Page<br />
                    <input onChange={this.handleChange} value={page} name="page" />
                </div>
                <div> Range<br />
                    <input onChange={this.handleChange} value={range} name="range" />
                </div>
                <div> Components<br />
                    <input onChange={this.handleChange} value={components} name="components" />
                </div>
                <div> Materials ***Best used when copy paste straight into box, then typing***<br />
                    <textarea onChange={this.handleArrayChange} value={material} name="material" rows="10" cols="50" />
                </div>
                <div> Ritual<br />
                    Yes<input onChange={this.handleChange} checked={this.state.checked} value="Ritual" name="ritual" type="radio" />
                    No<input onChange={this.handleChange} checked={this.state.checked} value="" name="ritual" type="radio" />
                </div>
                <div> Duration<br />
                    <input onChange={this.handleChange} value={duration} name="duration" />
                </div>
                <div> Casting Time<br />
                    <input onChange={this.handleChange} value={casting_time} name="casting_time" />
                </div>
                <div>Level<br />
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
                <div> School<br />
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
                <div> Classes<br />
                    Bard<input onChange={this.handleChecked} value={"Bard"} name="classes" type="checkbox" /><br />
                    Cleric<input onChange={this.handleChecked} value={"Cleric"} name="classes" type="checkbox" /><br />
                    Druid<input onChange={this.handleChecked} value={"Druid"} name="classes" type="checkbox" /><br />
                    Paladin<input onChange={this.handleChecked} value={"Paladin"} name="classes" type="checkbox" /><br />
                    Ranger<input onChange={this.handleChecked} value={"Ranger"} name="classes" type="checkbox" /><br />
                    Sorcerer<input onChange={this.handleChecked} value={"Sorcerer"} name="classes" type="checkbox" /><br />
                    Warlock<input onChange={this.handleChecked} value={"Warlock"} name="classes" type="checkbox" /><br />
                    Wizard<input onChange={this.handleChecked} value={"Wizard"} name="classes" type="checkbox" />
                </div>
                <button>Submit</button>
            </form>
        );
    }
}

export default Form;