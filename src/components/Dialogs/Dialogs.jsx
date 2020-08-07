import React from 'react';
import css from './Dialog.module.css';

const Dialogs = (props) => {
    return (
        <div className={css.dialogs}>
            <div className={css.dialogItems}>
                <div className={css.dialog + ' ' + css.active}>
                    Dimych
                </div>
                <div className={css.dialog}>
                    Andrey
                </div>
                <div className={css.dialog}>
                    Sveta
                </div>
                <div className={css.dialog}>
                </div>
                <div className={css.dialog}>
                    Sasha
                </div>
                <div className={css.dialog}>
                    Victor
                </div>
                <div className={css.dialog}>
                </div>
                <div className={css.dialog}>
                </div>
                <div className={css.dialog}>
                    Valera
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