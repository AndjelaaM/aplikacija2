import React from 'react';
import {
  Nav,
  NavLink,
  NavMenu,
  Bars,
  NavBtn,
} from './NavbarElements'; 
import UlogujSe from '../../stranice/UlogujSe'

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavLink to='/'>
            <h1>LETOVANJE</h1>
        </NavLink>
        <Bars />
        <NavMenu>
          <NavLink to='/home' activeStyle>
            Home
          </NavLink>
          <NavLink to='/contact' activeStyle>
            Contact 
          </NavLink>
        </NavMenu>
        <NavBtn>
            <UlogujSe></UlogujSe>
        </NavBtn>
      </Nav>
    </>
  );
};

export default Navbar;