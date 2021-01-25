import React, { useState, useEffect, useContext, useRef } from 'react';
import MagnifyIcon from 'mdi-react/MagnifyIcon';

import NavbarModal from './NavbarModal/NavbarModal';
import { Wrapper } from './styles';
import { GlobalContext } from '../../context/GlobalState';

import logo from '../../assets/logo.png';

const Navbar = () => {
  const { closeModal, toggleModalOpen, open } = useContext(GlobalContext);

  const node = useRef();

  useEffect(() => {
    const onBodyClick = (e) => {
      if (node.current.contains(e.target)) {
        return;
      }
      closeModal();
    };

    document.addEventListener('click', onBodyClick);

    return () => {
      document.removeEventListener('click', onBodyClick);
    };
  }, []);

  return (
    <Wrapper ref={node}>
      <img className="logo" src={logo} alt="windbnb" />
      <div className="input-container" onClick={toggleModalOpen}>
        <div className="input-container__location">Location</div>
        <div className="divider"></div>
        <div className="input-container__guests">Add guests</div>
        <div className="divider"></div>
        <div className="input-container__search-icon">
          <MagnifyIcon />
        </div>
      </div>
      {open ? <NavbarModal /> : ''}
    </Wrapper>
  );
};

export default Navbar;
