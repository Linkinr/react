
import {combineReducers, legacy_createStore as createStore} from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import friendsPageReducer from "./friendsPage-reducer";
import newsReducer from "./news-reducer";
import usersReducer from "./users-reducer";

let reducers = combineReducers({
    profilePage: profileReducer,
    messagesPage: dialogsReducer,
    friendsPage: friendsPageReducer,
    news: newsReducer,
    usersPage: usersReducer
});

let store = createStore(reducers)

export default store;