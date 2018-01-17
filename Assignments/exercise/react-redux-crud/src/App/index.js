import React from "react";
import Form from "../shared/Form"
import Recipes from "./Recipes"

function App(props){
    return(
        <div>
        <Form add clear></Form>
        <Recipes></Recipes>        
        </div>
    )
}
export default App;