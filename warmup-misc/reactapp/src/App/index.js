import React, { Component } from "react";
import "./index.css";

//components
import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";

function App(props){
    return (
        <div className="app-wrapper">
            <Header></Header>
            <Content></Content>
            <Footer></Footer>
        </div>
    )
}

export default App;