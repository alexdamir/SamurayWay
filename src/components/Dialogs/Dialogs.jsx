import React from 'react';
import css from './Dialog.module.css';
import { NavLink } from 'react-router-dom';

const Dialogs = (props) => {
    return (
        <div className={css.dialogs}>
            <div className={css.dialogItems}>
                <div className={css.dialog}>
                    <NavLink to='/dialogs/1'>Dimych</NavLink>
                </div>
                <div className={css.dialog}>
                    <NavLink to='/dialogs/2'>Andrey</NavLink>
                </div>
                <div className={css.dialog}>
                    <NavLink to='/dialogs/3'>Sveta</NavLink>
                </div>
                <div className={css.dialog}>
                    <NavLink to='/dialogs/4'>Sasha</NavLink>
                </div>
                <div className={css.dialog}>
                    <NavLink to='/dialogs/5'>Victor</NavLink>
                </div>
                <div className={css.dialog}>
                    <NavLink to='/dialogs/6'>Valera</NavLink>
                </div>
           </div>
            <div className={css.messages}>
                <div className={css.message}>Hi</div>
                <div className={css.message}>How is your it-kamasutra?</div>
                <div className={css.message}>Yo</div>
            </div>
        </div>
    )
}

export default Dialogs;