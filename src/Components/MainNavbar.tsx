import React, { useContext } from 'react';
import { UserContext } from '../provider/UserProvider';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { NavLink } from 'react-router-dom';
import { signOut } from '../firebase.js';

function MainNavbar() {
  const { user } = useContext(UserContext);
  return (
    <Navbar bg='dark' variant='dark' expand='lg'>
      <Navbar.Brand href='#home'>Fantacalcio App</Navbar.Brand>
      <Navbar.Toggle aria-controls='basic-navbar-nav' />
      <Navbar.Collapse id='basic-navbar-nav'>
        <Nav className='mr-auto'>
          <NavLink className='nav-link' to='/home'>
            Home
          </NavLink>
          {user && (
            <NavLink className='nav-link' to='/Aste'>
              Aste
            </NavLink>
          )}
          {user && (
            <Nav.Link
              onClick={() => {
                signOut();
              }}
            >
              Esci
            </Nav.Link>
          )}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default MainNavbar;
