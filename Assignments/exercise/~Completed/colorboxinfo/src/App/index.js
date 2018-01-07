import React, { Component } from "react";
import Nav from "./Nav";
import Content from "./Content"
import Span from "./Span"

function App(props) {
    let links = [{
        href: "/home",
        name: "Home"
    }, {
        href: "/about",
        name: "About"
    }, {
        href: "/contact",
        name: "Contact"
    }];
    let contents = [{
        title: "RedvsBlue",
        subTitle: "Endless Battle",
        info: "bleep bloop blarg"
    }]
    return (
        <div>
            <Nav links={links} 
            parentStyle={{backgroundColor: "green"}}
            childStyle ={{color: "yellow"}}>
            </Nav>
            <Content></Content>
            {/* <Content contents={contents}
            parentStyle={{backgroundColor: "blue"}}> */}
            {/* </Content>
            <Span contents={contents}
            parentStyle={{backgroundColor: "black"}}>
            </Span>
            <Span contents={contents}
            parentStyle={{backgroundColor: "grey"}}>
            </Span>
            <Span contents={contents}
            parentStyle={{backgroundColor: "brown"}}>
            </Span>
            <Span contents={contents}
            parentStyle={{backgroundColor: "teal"}}>
            </Span>
            <Span contents={contents}
            parentStyle={{backgroundColor: "orange"}}>
            </Span>
            <Span contents={contents}
            parentStyle={{backgroundColor: "purple"}}>
            </Span>
            <Span contents={contents}
            parentStyle={{backgroundColor: "red"}}>
            </Span>
            <Span contents={contents}
            parentStyle={{backgroundColor: "turquoise"}}>
            </Span>
            <Span contents={contents}
            parentStyle={{backgroundColor: "green"}}>
            </Span>
            <Span contents={contents}
            parentStyle={{backgroundColor: "yellow"}}>
            </Span> */}
        </div>
        
    )
}


export default App;