import React from 'react';
import { NavLink } from 'react-router-dom';

function Menu() {
    const activeClass = ({ isActive }) =>
    isActive ? "menu__item menu__item-active " : "menu__item";

    console.log(activeClass)
    
    return (
    <nav className="menu">
      <NavLink className={activeClass} to="/">Гоночн​ое такси</NavLink>
      <NavLink className={activeClass}  to="/drift">Дрифт-такси</NavLink>
      <NavLink className={activeClass} to="/timeattack">Time Attack</NavLink>
      <NavLink className={activeClass}  to="/forza">Forza Carting</NavLink>
    </nav>
  )
}

export default Menu;

