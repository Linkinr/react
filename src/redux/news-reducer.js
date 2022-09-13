const ADD_NEWS = 'ADD-NEWS';
const UPDATE_NEW_NEWS_TEXT = 'UPDATE-NEW-NEWS-TEXT'

let initialState = {
    newsData: [
        {newsItem: 'gdfgdg'},
        {newsItem: 'gdfgdgrdrgg'},
        {newsItem: 'gdfgdgrrdg'},
    ],
    newNews: 'ggggg'
}

const newsReducer = (state = initialState, action)=> {
    switch (action.type) {
        case ADD_NEWS:
            let newNews = {
                newsItem: state.newNews
            }
            state.newsData.push(newNews);
            state.newPostText = ''
            return state
        case UPDATE_NEW_NEWS_TEXT:
            state.newNews = action.newText;
            return state;
        default: return state
    }
}

export const addNewsActionCreator = () => ({type: ADD_NEWS})
export const updateNewNewsTextActionCreator = (text) => ({ type: UPDATE_NEW_NEWS_TEXT, newText: text})

export default newsReducer