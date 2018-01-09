import React, { Component } from "react";
import items from "../../shared/decor.json";
import Item from "./Item";



class DecorList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: items
        }

    }
    addItem(item) {
        this.setState((prevState)=>{
            let newItems = [item, ...prevState.items];
            return {
                items: newItems
            }
        })
    }
    deleteItem(i){
        this.setState((prevState)=>{
            let newItems = [...prevState.items];
            newItems.splice(i, 1);
            return {
                items: newItems
            }
        })
    }
    editItem(i, editedItem){
        this.setState((prevState)=>{
            let newItems = [...prevState.items];
            newItems[i] = editedItem;
            return{
                items: newItems
            }
        })
    }
    render() {
        let { items } = this.state;
        return (
            <div>
                {/* form */}
                {items.map((item, i) => {
                    return (
                        <Item key={i}{...item}></Item>
                    )
                })}
            </div>
        )
    }
}

export default DecorList;