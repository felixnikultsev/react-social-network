import profileReducer from './profile-reducer';
import messagesReducer from './messages-reducer';

let store = {
    _state: {
        profile: {
            posts: [
                {id: 1, text: 'I am too dumb to write anything.', likesCount: 2},
                {id: 2, text: 'I am insane!', likesCount: 12},
                {id: 3, text: 'I think I turned blue. I have heard it turns women on.', likesCount: 48}
            ],
            newPostText: ''
        },
        messages: {
            dialogs: [
                {id: 1, name: 'Anthony'},
                {id: 2, name: 'Felix'},
                {id: 3, name: 'Julia'},
                {id: 4, name: 'David'},
                {id: 5, name: 'Dylan'}
            ],
            messages: [
                {id: 1, user: 'Me', text: 'Hello'},
                {id: 2, user: 'Anthony', text: 'Hello'},
                {id: 3, user: 'Me', text: 'How are you?'},
                {id: 4, user: 'Anthony', text: 'I am fine, and you?'},
                {id: 5, user: 'Me', text: 'Me too, thank you :)'}
            ],
            newMessageText: ''
        }
    },
    _callSubscriber() { },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispath(action) {
        this._state.profile = profileReducer(this._state.profile, action);
        this._state.messages = messagesReducer(this._state.messages, action);
        this._callSubscriber(this._state);
    }
}

export default store;

window.store = store;