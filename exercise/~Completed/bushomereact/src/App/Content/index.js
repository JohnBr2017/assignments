import React, { Component } from "react";
import "./index.css";





function Content(props) {
    return (
        <div className="cont">
            {props.things.map((thing) => {
                return (
                    <div className="innerCont">
                        <img src={thing.image}></img>
                        <h4>{thing.name}</h4>
                        <h5>{thing.qty}</h5>
                        <h6>{thing.cost}</h6>
                    </div>
                )
            })}
        </div>
    )
}

export default Content;