import React, { useEffect, useContext, useRef } from 'react';
import MagnifyIcon from 'mdi-react/MagnifyIcon';

import NavbarModal from './NavbarModal/NavbarModal';
import { Wrapper } from './styles';
import { GlobalContext } from '../../context/GlobalState';

import logo from '../../assets/logo.png';

const Navbar = () => {
  const {
    closeModal,
    toggleModalOpen,
    open,
    selectedLocation,
    guests,
  } = useContext(GlobalContext);

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
        <input
          type="text"
          className="input-container__input"
          placeholder="Add location"
          value={selectedLocation ? selectedLocation : ''}
          readOnly
        />
        <input
          type="text"
          className="input-container__input"
          placeholder="Add guests"
          value={guests === 0 ? '' : `${guests} guests`}
          readOnly
        />
        <div className="input-container__search-icon">
          <MagnifyIcon />
        </div>
      </div>
      {open ? <NavbarModal /> : ''}
    </Wrapper>
  );
};

export default Navbar;
