import state from "./store";

let initialState = {
    friends: [
        {name: 'Ruslan'},
        {name: 'Nastya'},
        {name: 'Kostya'}
    ]
}

const friendsPageReducer = (state =initialState, action)=>{

    return state
}

export default friendsPageReducer