import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";


let store = {
    _state: {
        profilePage: {
            postData: [
                {id: 0, message: "Hi, how are you?", likesCount: 12},
                {id: 1, message: "Hi,nice to meet you", likesCount: 10},
                {id: 2, message: "Hi,nice to meet you", likesCount: 10},
                {id: 3, message: "Hi,nice to meet you", likesCount: 10}
            ],
            newPostText: 'it-kamasutre'
        },
        messagesPage: {
            messages: [
                {id: 1, message: 'Hi'},
                {id: 2, message: 'Howe are you?'},
                {id: 3, message: 'yo'},
                {id: 4, message: 'yo'},
                {id: 5, message: 'yo'},
                {id: 6, message: 'yo'},
            ],
            newMessageText: 'Hellp',
            dialogs: [
                {id: 1, name: 'Dimych'},
                {id: 2, name: 'Andrew'},
                {id: 3, name: 'Sveta'},
                {id: 4, name: 'Sasha'},
                {id: 5, name: 'Viktor'},
                {id: 6, name: 'Valera'}
            ]
        },
        friendsPage: {
            friends: [
                {name: 'Ruslan'},
                {name: 'Nastya'},
                {name: 'Kostya'}
            ]
        }


    },
    _callSubscriber() {
        console.log('State changed')
    },

    getState() {
        return this._state
    },
    subscribe(observer) {
        this._callSubscriber = observer
    },
    dispatch(action) {
        profileReducer(this._state.profilePage, action)
        dialogsReducer(this._state.messagesPage, action)
        this._callSubscriber(this._state)

    }

}





window.store = store;
export default store