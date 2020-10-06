const SEND_MESSAGE = 'messages/SEND-MESSAGE';

let initialState = {
    dialogs: [
        { id: 1, name: 'Anthony' },
        { id: 2, name: 'Felix' },
        { id: 3, name: 'Julia' },
        { id: 4, name: 'David' },
        { id: 5, name: 'Dylan' },
    ],
    messages: [
        { id: 1, user: 'Me', text: 'Hello' },
        { id: 2, user: 'Anthony', text: 'Hello' },
        { id: 3, user: 'Me', text: 'How are you?' },
        { id: 4, user: 'Anthony', text: 'I am fine, and you?' },
        { id: 5, user: 'Me', text: 'Me too, thank you :)' },
    ],
};

const messagesReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            return {
                ...state,
                messages: [
                    ...state.messages,
                    {
                        id: 6,
                        text: action.newMessageText,
                        user: 'Me',
                    },
                ],
            };
        default:
            return state;
    }
};

export const sendMessage = (newMessageText) => ({ type: SEND_MESSAGE, newMessageText });

export default messagesReducer;
