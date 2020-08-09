const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const ADD_MESSAGE = 'ADD_MESSAGE';
const UPDATE_NEW_MESSAGE_BODY ='UPDATE_NEW_MESSAGE_BODY';

export let store = {
    _state:  {
        profileData: {
            postsData: [
                {id: 1, message: "Hi! How are you? Yes?" , likescount: 11},
                {id: 2, message: "I study React"    , likescount: 12}
            ],
            newPostTextValue: ''   
              
        },
        dialogsData: {
             dialogsData: [
                {id: 1, name:"Dimych"},
                {id: 2, name:"Andrey"},
                {id: 3, name:"Sveta" },
                {id: 4, name:"Sasha" },
                {id: 5, name:"Viktor"},
                {id: 6, name:"Valera"}
            ],        
            messagesData: [
                {id: 1, message: "Hi!" },
                {id: 2, message: "How is your it-kamasutra?" },
                {id: 3, message: "Yo"},
                {id: 4, message: "Yo"},
                {id: 5, message: "Yo"}
            ],
            newMessageBodyValue: ''   
        }
    },
    getstate() {
        return this._state;
    },
    _callRenderAll(store)  {
        console.log('state chаnged');
    },
    subscribe (observer) {
        this._callRenderAll = observer;
    },
    
    dispatch(action) {
        if (action.type === ADD_POST) {
            let id = 1 + Math.max(...(this._state.profileData.postsData.map( (e) => (e.id) )));
            let newPost = {
                id: id,
                message: this._state.profileData.newPostTextValue,
                likescount:0
            };
            this._state.profileData.postsData.push(newPost);
            this._state.profileData.newPostTextValue = '';
            this._callRenderAll(this);
    
        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profileData.newPostTextValue = action.newText;
            this._callRenderAll(this);    
        } else if (action.type === ADD_MESSAGE) {
            let id = 1 + Math.max(...(this._state.dialogsData.messagesData.map( (e) => (e.id) )));
            let newMessage = {
                id: id,
                message: this._state.dialogsData.newMessageBodyValue,
                likescount:0
            };
            this._state.dialogsData.messagesData.push(newMessage);
            this._state.dialogsData.newMessageBodyValue = '';
            this._callRenderAll(this);
    
        } else if (action.type === UPDATE_NEW_MESSAGE_BODY) {
            this._state.dialogsData.newMessageBodyValue = action.body;
            this._callRenderAll(this);    
        }
    }
}


export const addPostActionCreator = () => ({ type: ADD_POST });
export const updateNewPostTextActionCreator = (text) =>
    ({ type: UPDATE_NEW_POST_TEXT, newText: text });

export const addNewMessageCreator = () => ({ type: ADD_MESSAGE });
export const updateNewMessageBodyCreator = (text) =>
    ({ type: UPDATE_NEW_MESSAGE_BODY, body: text });    
    



