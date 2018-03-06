import React, { Component } from "react";
import "./index.css"



class App extends Component {
    constructor(props) {
        super();
        this.state = {
            counter: 0,
            color: "yellow"
        }
        this.handleClick = this.handleClick.bind(this);
        this.resetClick = this.resetClick.bind(this);
        this.changeColor = this.changeColor.bind(this);
    }

    handleClick(e) {
        let name = e.target.name;
        this.setState((prevState)=>{
            return {
                counter: name === "add" ? prevState.counter + 1 : prevState.counter - 1
            }
        })
    }

    resetClick() {
        this.setState({
            counter: 0
        })
    }

    changeColor() {
        this.setState((prevState) => {
            return {
                color: prevState.color === "yellow" ? "maroon" : "yellow"
            }
        })
    }

    render() {
        let { counter, color } = this.state;
        let boxStyle = { backgroundColor: color }
        return (
            <div>
                <button name="add" onClick={this.handleClick} >add</button>
                <button name="subt" onClick={this.handleClick} >subt</button>
                <p>{counter}</p>
                <button onClick={this.resetClick} >reset</button>

                <div style={boxStyle} className="box" onMouseOver={this.changeColor} onMouseOut={this.changeColor}></div>

            </div>
        )
    }
}




export default App;