import React from 'react';
import { NavLink } from 'react-router-dom';

function NavBar() {
  return (
    <div>
      <header>
        <div>
          <NavLink to='/' exact>
            Home
          </NavLink>
          <NavLink to='/projects'>
            Projects
          </NavLink>
          <NavLink to='/about'>
            About me
          </NavLink>
        </div>
      </header>
    </div>
  )
}

export default NavBar
