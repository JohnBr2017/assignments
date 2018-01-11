import React, {Component} from "react";

import List from "./List"


import axios from "axios";
const htUrl = "http://api.vschool.io:6543/hitlist.json";

class HitList extends Component{
    constructor(props){
        super(props);
        this.state = {
            names: []
        }
    }

    componentDidMount(){
        axios.get(htUrl)
            .then((response)=>{
                this.setState({
                    name: results
                }) 
            })
    }
    render(){
        let { name }= this,state
        return (
            <div>
                {names.map((name, i)=>{
                    let { image, name } = name;
                    return <List key={i} name={name} image={image}></List>
                })}
            </div>
        )
    }
}

export default HitList;