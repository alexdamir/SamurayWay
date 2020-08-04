import React from 'react';
import n from './Navbar.module.css';
console.log(n);

const Navbar = () => {
  return (
    <nav className={n.nav}>
      <div className={`${n.item} ${n.active}`}>Profile</div>
      <div className={n.item}>Messages</div>
      <div className={n.item}>News</div>
      <div className={n.item}>Music</div>
      <div className={n.item}>Settings</div>

    </nav>

  );
}

export default Navbar;