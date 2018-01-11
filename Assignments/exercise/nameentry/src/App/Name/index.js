import React, { Component } from "react";


class Name extends Component {
    constructor(props) {
        super(props);
        this.state = {
            names: ["tom", "betty"],
            inputs: {
                name: ""
            }
        }
        this.addName = this.addName.bind(this)
    }
    addName(name) {
        this.setState((prevState) => {
            let newName = [name, ...prevState.names];
            return {
                names: newName
            }
        })
    }
    handleChange(e){
        
    }
    render() {
        let { name } = this.state.inputs;
        return (
            <div>
                <form action="submit">
                    <input onChange={this.addName} value={this.names} type="text" placeholder="name goes here" />
                </form>
                <ul>Names
                    {names.map((name, i) => {
                        return(
                        <li key={i}>{name}</li>
                        )
                    })}
                </ul>
            </div>
        )
    }
}

export default Name;