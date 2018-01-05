import React, { Component } from "react";
import "./index.css";

//components
import Header from "./Header";
import Nav from "./Nav";
import Content from "./Content";
import Footer from "./Footer";

let things = [{
    image: "https://i.imgur.com/zmwiybH.jpg",
    name: "Explorer's Pack",
    qty: "1",
    cost: "10 gold"
}, {
    image: "https://media.istockphoto.com/vectors/vector-sketch-single-crowbar-vector-id493024412",
    name: "Crowbar",
    qty: "1",
    cost: "2 gold"
}, {
    image: "https://cdn.vox-cdn.com/uploads/chorus_asset/file/7390227/MRE-chuckgetty.0.jpg",
    name: "Rations",
    qty: "12 per case",
    cost: "6 gold"
}, {
    image: "http://revwar75.com/library/rees/images/castiron.gif",
    name: "Pot Iron",
    qty: "1",
    cost: "gold"
}, {
    image: "http://2.bp.blogspot.com/--Q7L3Z8LSPE/TnjocXm-TII/AAAAAAAAIXI/kUdJPGSxy6Q/s1600/d_2634.jpg",
    name: "Pole (10 Foot)",
    qty: "bundle of 5",
    cost: "25 copper"
}, {
    image: "https://db4sgowjqfwig.cloudfront.net/campaigns/119936/assets/536684/bag_of_holding.png?1450283607",
    name: "Bag of Holding",
    qty: "the only one",
    cost: "priceless"
}];


function App(props) {
    return (
        <div className="wrapper">
            <Nav></Nav>
            <Header></Header>
            <Content things={things}></Content>
            <Footer></Footer>
        </div>
    )
}

export default App;