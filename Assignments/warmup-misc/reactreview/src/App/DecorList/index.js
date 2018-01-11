import React, { Component } from "react";
import items from "../../shared/decor.json";
import Item from "./Item";
import Form from "./Form";

class DecorList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: items
        }
        this.addItem = this.addItem.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
        this.editItem = this.editItem.bind(this);
    }
    addItem(item) {
        this.setState((prevState) => {
            let newItems = [item, ...prevState.items];
            return {
                items: newItems
            }
        })
    }
    deleteItem(i) {
        this.setState((prevState) => {
            let newItems = [...prevState.items];
            newItems.splice(i, 1);
            return {
                items: newItems
            }
        })
    }
    editItem(editedItem, i) {
        this.setState((prevState) => {
            let newItems = [...prevState.items];
            newItems[i] = editedItem;
            return {
                items: newItems
            }
        })
    }
    render() {
        let { items } = this.state;
        return (
            <div>
                <Form submit={this.addItem}></Form>
                {items.map((item, i) => {
                    return (
                        <Item index={i} editItem={this.editItem}deleteItem={this.deleteItem} key={i}{...item}></Item>
                    )
                })}
            </div>
        )
    }
}

export default DecorList;