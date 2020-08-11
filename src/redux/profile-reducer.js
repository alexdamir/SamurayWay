const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

const initialState = {
    postsData: [
        {id: 1, message: "Hi! How are you? Yes?" , likescount: 11},
        {id: 2, message: "I study React"    , likescount: 12}
    ],
    newPostTextValue: ''   
      
};

export const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST:
            let id = 1 + Math.max(...(state.postsData.map((e) => (e.id))));
            return {
               ...state,
               postsData: [
                  ...state.postsData,
                  {
                   id: id,
                   message:    state.newPostTextValue,
                   likescount: 0
                  }
               ],
            newPostTextValue: ''
            };
        case UPDATE_NEW_POST_TEXT:
            return {
            ...state,
            newPostTextValue: action.newText
            };
        default:
            return state;
    }
}

export const addPostActionCreator = () => ({ type: ADD_POST });
export const updateNewPostTextActionCreator = (text) =>
    ({ type: UPDATE_NEW_POST_TEXT, newText: text });
