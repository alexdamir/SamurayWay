import React from 'react';
import css from './Dialog.module.css';
import { NavLink } from 'react-router-dom';

const DialogItem = (props) => {
    let path = '/dialogs/' + props.id;
    return (
        <div className={css.dialog}>
            <NavLink to={path} activeClassName={css.active}>{props.name}</NavLink>
        </div>
    );
}

const Message = (props) => {
    return (
        <div className={css.message}>{props.message}</div>
    );
}


const Dialogs = (props) => {
    return (
        <div className={css.dialogs}>
            <div className={css.dialogItems}>
                <DialogItem name="Dimych" id="1" />
                <DialogItem name="Andrey" id="2" />
                <DialogItem name="Sveta" id="3" />
                <DialogItem name="Sasha" id="4" />
                <DialogItem name="Victor" id="5" />
                <DialogItem name="Valera" id="6" />

            </div>
            <div className={css.messages}>
                <Message message="Hi" />
                <Message message="How is your it-kamasutra?" />
                <Message message="Yo" />
                <Message message="Yo" />
                <Message message="Yo" />
            </div>
        </div>
    )
}

export default Dialogs;