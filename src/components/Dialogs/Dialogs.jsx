import React from 'react';
import css from './Dialog.module.css';
import { NavLink } from 'react-router-dom';

let dialogsData = [
    {id: 1, name:"Dimych"},
    {id: 2, name:"Andrey"},
    {id: 3, name:"Sveta" },
    {id: 4, name:"Sasha" },
    {id: 5, name:"Viktor"},
    {id: 6, name:"Valera"}
];

let messagesData = [
    {id: 1, message: "Hi!" },
    {id: 2, message: "How is your it-kamasutra?" },
    {id: 3, message: "Yo"},
    {id: 4, message: "Yo"},
    {id: 5, message: "Yo"}
];

const DialogItem = (props) => {
    let path = '/dialogs/' + props.id;
    return (
        <div className={css.d}>
            <NavLink to={path} activeClassName={css.active}>{props.name}</NavLink>
        </div>
    );
}

const Message = (props) => {
    return (
        <div className={css.message}>{props.message}</div>
    );
}

let dialogsElements = dialogsData.
    map(d => <DialogItem name={d.name} id={d.id} />);

let messagesElements = messagesData.
    map(m => <Message message={m.message} />);

const Dialogs = (props) => {
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