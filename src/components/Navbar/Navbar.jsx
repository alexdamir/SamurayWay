import React from 'react';
import css from './Navbar.module.css';
//console.log(css);

const Navbar = () => {
  return (
    <nav className={css.nav}>
      <div className={`${css.item} ${css.active}`}>Profile</div>
      <div className={css.item}>Messages</div>
      <div className={css.item}>News</div>
      <div className={css.item}>Music</div>
      <div className={css.item}>Settings</div>

    </nav>

  );
}

export default Navbar;