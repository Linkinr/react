import state from "./store";
import store from "./store";
const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
    postData: [
        {id: 0, message: "Hi, how are you?", likesCount: 12},
        {id: 1, message: "Hi,nice to meet you", likesCount: 10},
        {id: 2, message: "Hi,nice to meet you", likesCount: 10},
        {id: 2, message: "Hi,nice to meet you", likesCount: 10}
    ],
    newPostText: 'it-kamasutre'
}
const profileReducer = (state = initialState, action)=>{
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 5,
                message: state.newPostText,
                likesCount: 0
            }
            return {
                ...state,
                newPostText: '',
                postData: [...state.postData, newPost]
            };
        }
        case UPDATE_NEW_POST_TEXT: {
            return {
                ...state,
                newPostText: action.newText
            }
        }
        default: return state;
    }

}
export const addPostActionCreator = () => ({type: ADD_POST})
export const updateNewPostTextActionCreator = (text) => ({ type: UPDATE_NEW_POST_TEXT, newText: text})
export default profileReducer