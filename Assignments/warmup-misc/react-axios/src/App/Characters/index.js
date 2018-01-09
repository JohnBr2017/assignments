import React, { Component } from "react";

import Character from "./Character";

import axios from "axios";
const swUrl = "https://swapi.co/api/people";

class Characters extends Component {
    constructor(props) {
        super(props);
        this.state = {
            charaters: [],
            loading: true
        }
    }

    componentDidMount() {
        axios.get(swUrl)
            .then((response) => {
                let { results } = response.data;
                this.setState({
                    characters: results,
                    loading: false
                })
            })
            .catch((err) => {
                console.error(err);

            })
    }
    render() {
        let { characters, loading } = this.state
        return (
            loading ?
                <div>
                    <h1>Im loading</h1>
                </div>
                :
                <div>
                    {characters.map((character, i) => {
                        let { skin_color, name } = character;
                        return <Character key={i} name={name} skin_color={skin_color}></Character>
                    })}
                </div>
        )
    }
}

export default Characters;