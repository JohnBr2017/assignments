const redux = require("redux")

// reducer 
        // is PURE function
function contacts(prevContacts = [], action){
    switch (action.type) {
        case "ADD_CONTACT":
            return [...prevContacts, action.contact];
        case "REMOVE_CONTACT":
            let newContacts = [...prevContacts];
            return newContacts.filter((contact)=>{
                return action.id !== contact.id;
            })
        case "EDIT_CONTACT":
            let editedContacts = [...prevContacts];
            return editedContacts.map((contact) =>{
                if(contact.id === action.id){
                    return Object.assign(contact, action.contact);
                }else{
                    return contact;
                }
            });
        default:
            return prevContacts
    }

}
// create store
let store = redux.createStore(redux.combineReducers({contacts}));

// show state everytime state change
store.subscribe(()=>{
    console.log(store.getState());
});

// action creators
// 2 requirements
//     1) for every input exactly one output that is the same every Time
//     2) cannot affect anything outside of its scope
function addContact(contact){
    return{
        type: "ADD_CONTACT",
        contact
    }
}

function removeContact(id){
    return{
        type: "REMOVE_CONTACT",
        id
    }
}

function editContact(id, contact){
    return{
        type: "EDIT_CONTACT",
        id, 
        contact
    }
}

// dispatch
store.dispatch(addContact({
    id: 0,
    name: "John"
}))

store.dispatch(addContact({
    id: 1,
    name: "Tim"
}))

store.dispatch(addContact({
    id: 2,
    name: "Sam"
}))

store.dispatch(removeContact(1))
store.dispatch(editContact(2, {
    name: "Bob"
}))