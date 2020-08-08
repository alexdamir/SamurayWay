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
<<<<<<< HEAD
    _callRenderAll(store)  {
        console.log('state chаnged');
    },
    subscribe (observer) {
        this._callRenderAll = observer;
=======
    _callObserver(store)  {
        console.log('state chаnged');
    },
    subscribe (observer) {
        this._callObserver = observer;
>>>>>>> 98328e2035cfc286720b297a71e2cc0f59e9909c
    },
    
    dispatch(action) {
        if (action.type === 'ADD-POST') {
            let newPost = {
                id: this._state.profileData.postsData.length,
                message: this._state.profileData.newPostTextValue,
                likescount:0
            };
            this._state.profileData.postsData.push(newPost);
            this._state.profileData.newPostTextValue = '';
<<<<<<< HEAD
            this._callRenderAll(this);
    
        } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
            this._state.profileData.newPostTextValue = action.newText;
            this._callRenderAll(this);    
=======
            this._callObserver(this);
    
        } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
            this._state.profileData.newPostTextValue = action.newText;
            this._callObserver(this);    
>>>>>>> 98328e2035cfc286720b297a71e2cc0f59e9909c
        }
    }
}
