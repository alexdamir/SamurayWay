import React from 'react';
import css from './Navbar.module.css';
import { NavLink } from 'react-router-dom';
//console.log(css);

const Navbar = () => {
  return (
    <nav className={css.nav}>
      <div className={css.item}><NavLink activeClassName={css.active} to='/profile'>Profile</NavLink></div>
      <div className={css.item}><NavLink activeClassName={css.active} to='/dialogs'>Messages</NavLink></div>
      <div className={css.item}><NavLink activeClassName={css.active} to='/news'>News</NavLink></div>
      <div className={css.item}><NavLink activeClassName={css.active} to='/music'>Music</NavLink></div>
      <div className={css.item}><NavLink activeClassName={css.active} to='/users'>Users</NavLink></div>
      <div className={css.item}><NavLink activeClassName={css.active} to='/settings'>Settings</NavLink></div>
    </nav>

  );
}

export default Navbar;