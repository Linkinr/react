import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {addMessageActionCreator, updateNewMessageTextActionCreator} from "../../redux/dialogs-reducer";


const Dialogs = (props) => {
    let state = props.messagesPage
    let dialogsArr = state.dialogs.map( el => <DialogItem name={el.name} key={el.id} id={el.id}/>);
    let messageArr = state.messages.map( el => <Message message={el.message + el.id} key={el.id}/>)
    let newMessage = state.newMessageText;

    let addMessage =()=> {
        props.addMessage()
    }
    let onMessageChange = (e) => {
        let text = e.target.value;
        props.onMessageChange(text)

    }

    return <div className={s.dialogs}>
        <div className={s.dialogsItems}>
            {dialogsArr}
        </div>
        <div className={s.messages}>
            {messageArr}
            <div><textarea onChange={onMessageChange}  value={newMessage}/></div>

            <div><button onClick={addMessage}>Add Message</button></div>
        </div>
    </div>


}

export default Dialogs;