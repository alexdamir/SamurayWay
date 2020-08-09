const ADD_MESSAGE = 'ADD_MESSAGE';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';

export const dialogReducer = (state, action) => {
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