import React, { Component } from "react";
import axios from "axios";
import { connect } from "react-redux";

import { getStarships } from "../redux/index.js";

class App extends Component {
    componentDidMount() {
        this.props.getStarships();
    }

    render() {
        const starships = this.props.starships.map(ship => <h1 key={ship.name}>{ship.name}</h1>)
        return (
            <div>
                {starships}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        starships: state
    }
}

export default connect(mapStateToProps, { getStarships })(App);