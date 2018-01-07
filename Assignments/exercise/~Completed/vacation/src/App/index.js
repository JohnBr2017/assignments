import React, { Component } from "react";
import Cards from "./Cards"


let vacationspots = [  
    {
      place: "Meridian, Idaho",
      price: "$40",
      timeToGo: "Spring"
    },{
      place: "Cancun",
      price: "$900",
      timeToGo: "Winter"
    },{
      place: "China",
      price: "$1200",
      timeToGo: "Fall"
    },{
      place: "Russia",
      price: "$1100",
      timeToGo: "Summer"
    },{
      place: "Lebanon",
      price: "$400",
      timeToGo: "Spring"
    }
  ]


function App(props){
    return (
        <div >
        <Cards vacationspots={vacationspots}/>
        </div>
    )
}

export default App;