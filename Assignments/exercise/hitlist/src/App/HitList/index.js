import React, { Component } from "react";

import List from "./List"

import axios from "axios";
const htUrl = "http://api.vschool.io:6543/hitlist.json";

class HitList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            peoples: [],
            loading: true
        }
    }

    componentDidMount() {
        axios.get(htUrl)
            .then((response) => {
                let { results } = response.data;
                this.setState({
                    peoples: results,
                    loading: false
                })
            })
            .catch((err) => {
                console.error(err);
            })
    }
    render() {
        let { peoples, loading } = this.state
        return (
            loading ?
                <div>
                    <h1>Im loading</h1>
                </div>
                :
                <div>
                    {peoples.map((person, i) => {
                        let { image, name } = person;
                        return <List key={i} name={name} image={image}></List>
                    })}
                </div>
        )
    }
}

export default HitList;