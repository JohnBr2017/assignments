import React, { Component } from "react";
import "./index.css";

function Cards(props){
    return (
        <div className="wrapper">
        {props.vacationspots.map((vacationspot)=> {
            return (
                <div className="box" >
                    <h1>{vacationspot.place}</h1>
                    <h2>{vacationspot.price}</h2>
                    <h2>{vacationspot.timeToGo}</h2>
                </div>
             )})}
        </div>
    )
}

export default Cards;

