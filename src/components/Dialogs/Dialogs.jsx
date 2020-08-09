import React from 'react';
import css from './Dialog.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import {updateNewMessageBodyCreator,addNewMessageCreator} from  './../../redux/dialog-reducer';

const Dialogs = (props) => {
    let dialogsElements =
        props.store.getstate().dialogsData.dialogsData.map(d => <DialogItem name={d.name} id={d.id} />);

    let messagesElements =
        props.store.getstate().dialogsData.messagesData.map(m => <Message message={m.message}  id={m.id} />);
    let newMessageChange = (еvent) => {
        let message = еvent.target.value;
        props.store.dispatch( updateNewMessageBodyCreator(message) );
    } ;
    let addNewMessageClick = () => {
        props.store.dispatch( addNewMessageCreator() );
    } ;

    return (
        <div className={css.dialogs}>
            <div className={css.dialogItems}>
                {dialogsElements}
            </div>
            
            <div className={css.messages}>
                
                {messagesElements}

                <div>
                    <div><textarea value={props.store.getstate().dialogsData.newMessageBodyValue} onChange={newMessageChange}></textarea></div>
                    <div><button onClick={addNewMessageClick}>Add Message</button></div>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;