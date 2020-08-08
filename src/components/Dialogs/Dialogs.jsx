import React from 'react';
import css from './Dialog.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';

const Dialogs = (props) => {
    let dialogsElements =
        props.state.dialogsData.dialogsData.map(d => <DialogItem name={d.name} id={d.id} />);

    let messagesElements =
        props.state.dialogsData.messagesData.map(m => <Message message={m.message} />);
    return (
        <div className={css.dialogs}>
            <div className={css.dialogItems}>
                {dialogsElements}
            </div>
            <div className={css.messages}>
                {messagesElements}
            </div>
        </div>
    )
}

export default Dialogs;