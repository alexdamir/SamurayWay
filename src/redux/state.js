const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

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
            ]
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
            let newPost = {
                id: this._state.profileData.postsData.length,
                message: this._state.profileData.newPostTextValue,
                likescount:0
            };
            this._state.profileData.postsData.push(newPost);
            this._state.profileData.newPostTextValue = '';
            this._callRenderAll(this);
    
        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profileData.newPostTextValue = action.newText;
            this._callRenderAll(this);    
        }
    }
}


export const addPostActionCreator = () => ( {type:ADD_POST} );
export const updateNewPostTextActionCreator = (text) => 
    ( {type:UPDATE_NEW_POST_TEXT, newText:text} );    



