import React from 'react';
import css from './Header.module.css';
import { NavLink } from 'react-router-dom';

const Header = (props) => {
    
    return (
        <header className={css.header}>

            
            <img src='https://bower.io/img/bower-logo.png' alt='logo' />
            

            <div className={css.loginBlock}>
                {props.state.isAuth ? 'id:'+props.state.id
                :<NavLink to={'/login'}>Login</NavLink> }
                
            </div>
        </header>

    );
}

export default Header;