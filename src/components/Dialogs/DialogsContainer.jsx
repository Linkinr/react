import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {addMessageActionCreator, updateNewMessageTextActionCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../redux/profile-reducer";


// const DialogsContainer = (props) => {
//     let state = props.store.getState().messagesPage
//
//
//     let addMessage =()=> {
//         props.store.dispatch(addMessageActionCreator());
//         // props.updateNewMessageText('')
//     }
//     let onMessageChange = (text) => {
//         let action = updateNewMessageTextActionCreator(text);
//         props.store.dispatch(action)
//     }
//
//     return (
//         <Dialogs updateNewMessageTextAction={onMessageChange}
//                  addMessage={addMessage}
//                  messagesPage={state}/>
//     )
//
//
// }
const mapStateToProps = (state) => {
    return {
        messagesPage: state.messagesPage
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        onMessageChange: (text) => {
            let action =  updateNewMessageTextActionCreator(text) ;
            dispatch(action)
        },
        addMessage: () => {
            dispatch(addMessageActionCreator());
        }
    }
}
const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer;