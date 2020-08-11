import React from 'react';
import css from './Dialog.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
const Dialogs = (props) => {

    let dialogsElements = props.state.dialogsData.map(d => <DialogItem name={d.name} id={d.id} />);

    let messagesElements = props.state.messagesData.map(m => <Message message={m.message} id={m.id} />);

    let onMessageChange = (еvent) => {
        let message = еvent.target.value; props.updateNewMessageBody(message);
    };

    let onNewMessageClick = () => {
        props.sendMessage();
    };

    return (
        <div className={css.dialogs}> <div className={css.dialogItems}> {dialogsElements} </div>  <div className={css.messages}>  {messagesElements} <div> <div><textarea value={props.state.newMessageBodyValue} onChange={onMessageChange}></textarea></div> <div><button onClick={onNewMessageClick}>Add Message</button></div> </div> </div>
        </div>
    )
}

export default Dialogs;