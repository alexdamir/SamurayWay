import React from 'react';
import css from '../Dialog.module.css';


const Message = (props) => {
    return (
        <div className={css.message}>({props.id}) {props.message}</div>
    );
}


export default Message;