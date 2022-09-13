import React from 'react';
import {addNewsActionCreator, updateNewNewsTextActionCreator} from "../../redux/news-reducer";
import s from "./news.module.css"


const News = (props) => {
    let state = props.store.getState().news;
    let newsArr = state.newsData.map ( el => <div>{el.newsItem}</div>)

    let addMessage =()=> {
        props.dispatch(addNewsActionCreator());
        // props.updateNewMessageText('')
    }

    let onMessageChange = (e)=> {
        let text = e.target.value;
        let action = updateNewNewsTextActionCreator(text)
        props.dispatch(action)
        console.log(state.newNews)
    }

    return (

        <div>
            <div className={s.newsItems} >{newsArr}</div>

            <div><textarea onChange={onMessageChange} value={state.newNews}/>
                <button onClick={addMessage}>додоти новину</button></div>

        </div>

    )
}

export default News;