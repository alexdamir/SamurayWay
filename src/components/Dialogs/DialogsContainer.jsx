import React from 'react';
import { updateNewMessageBodyCreator, addNewMessageCreator } from './../../redux/dialog-reducer';
import Dialogs from './Dialogs';
import { connect } from 'react-redux';

// const oldDialogsContainer = () => {
//     let updateNewMessageBody = (text) => {
//         props.store.dispatch(updateNewMessageBodyCreator(text));
//     };

//     let sendMessage = () => { props.store.dispatch(addNewMessageCreator()); };
//     return (
//         <Dialogs state={props.store.getState().dialogsData} sendMessage={sendMessage} updateNewMessageBody={updateNewMessageBody} />
//     )
// }

let mapStateToProps = (state) => {
    return {state: state.dialogsData };
};
let mapDispatchToProps = (dispatch) => {
    return {
        sendMessage: () => {
            dispatch(addNewMessageCreator());    
        },
        updateNewMessageBody: (text) => {
            dispatch(updateNewMessageBodyCreator(text));    
        }
    };
}
const DialogsContainer = connect(mapStateToProps,mapDispatchToProps)(Dialogs);

export default DialogsContainer;