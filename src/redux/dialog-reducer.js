const ADD_MESSAGE = 'ADD_MESSAGE';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';

let initialState = {
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
};

export const dialogReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MESSAGE:
      let id = 1 + Math.max(...(state.messagesData.map((e) => (e.id))));
      let newMessage = {
        id: id,
        message: state.newMessageBodyValue,
        likescount: 0
      };
      state.messagesData.push(newMessage);
      state.newMessageBodyValue = '';

      return state;


    case UPDATE_NEW_MESSAGE_BODY:
      state.newMessageBodyValue = action.body;
      return state;
    default:
      return state;
  }
}

export const addNewMessageCreator = () => ({ type: ADD_MESSAGE });
export const updateNewMessageBodyCreator = (text) =>
  ({ type: UPDATE_NEW_MESSAGE_BODY, body: text });  