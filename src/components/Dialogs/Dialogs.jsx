import React from 'react';
import css from './Dialog.module.css';
import { NavLink } from 'react-router-dom';

let dialogsData = [
    {id: 1, name:"Dimych"},
    {id: 2, name:"Andrew"},
    {id: 3, name:"Sveta" },
    {id: 4, name:"Sasha" },
    {id: 5, name:"Victor"},
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
                <DialogItem name={dialogsData[0].name} id={dialogsData[0].id} />
                <DialogItem name={dialogsData[1].name} id={dialogsData[1].id} />
                <DialogItem name={dialogsData[2].name} id={dialogsData[2].id} />
                <DialogItem name={dialogsData[3].name} id={dialogsData[3].id} />
                <DialogItem name={dialogsData[4].name} id={dialogsData[4].id} />
                <DialogItem name={dialogsData[5].name} id={dialogsData[5].id} />                              
            </div>
            <div className={css.messages}>
                <Message message={messagesData[0].message} />                
                <Message message={messagesData[1].message} />                
                <Message message={messagesData[2].message} />                
                <Message message={messagesData[3].message} />                
                <Message message={messagesData[4].message} />                
            </div>
        </div>
    )
}

export default Dialogs;