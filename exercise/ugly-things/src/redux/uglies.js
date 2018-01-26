const uglies = (prevUglies = [], action) => {
    switch (action.type) {
        case "ADD_UGLY":
            return [...prevUglies, action.newUgly];
        case "REMOVE_UGLY":
            let newUglies = [...prevUglies];
            return newUglies.filter((ugly) => {
                return action.id !== ugly.id;
            })
        default:
            return prevUglies;
    }
}


export const addUgly = (ugly) => {
    return {
        type: "ADD_UGLY",
        ugly
    }
}

export const removeUgly = (id) => {
    return {
        type: "REMOVE_UGLY",
        id
    }
}

export default uglies