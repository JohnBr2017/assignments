import React, { Component } from "react";
import Picture from "./Picture";
import "./index.css";

function Gallery(props) {
    let picData = [
        {
            caption: "timmy",
            author: "sammy",
            backgroundUrl: "#",
        }
    ]
    return (
        <section className="gallery-wrapper">
            {picData.map((picInfo, index)=>{
                return <Picture {...picInfo} key={index}></Picture>
            })}
        </section>
    )
}


export default Gallery;
