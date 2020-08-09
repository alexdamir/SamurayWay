import {profileReducer} from './profile-reducer';
import {dialogReducer} from './dialog-reducer';
import {sidebarReducer} from './sidebar-reducer';

export let store = {
    _state:  {
        sidebarData: {},
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
        this._state.profileData = profileReducer(this._state.profileData, action);
        this._state.dialogsData = dialogReducer(this._state.dialogsData, action);
        this._state.sidebarData = sidebarReducer(this._state.sidebarData, action);
        this._callRenderAll(this);
    }

}
