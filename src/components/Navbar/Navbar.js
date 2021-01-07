import React, { useState, useEffect, useRef } from 'react';
import MagnifyIcon from 'mdi-react/MagnifyIcon';

import NavbarModal from './NavbarModal/NavbarModal';
import { Wrapper } from './styles';
import logo from '../../assets/logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(undefined);

  const ref = useRef();

  useEffect(() => {
    const onBodyClick = (e) => {
      if (ref.current.contains(e.target)) {
        return;
      }
      setIsOpen(false);
    };
    document.body.addEventListener('click', onBodyClick);

    return () => {
      document.body.removeEventListener('click', onBodyClick);
    };
  }, []);

  return (
    <>
      <Wrapper ref={ref}>
        <img className="logo" src={logo} alt="windbnb" />
        <div className="input-container" onClick={() => setIsOpen(!isOpen)}>
          <div className="input-container__location">Location</div>
          <div className="divider"></div>
          <div className="input-container__guests">Add guests</div>
          <div className="divider"></div>
          <div className="input-container__search-icon">
            <MagnifyIcon />
          </div>
        </div>
      </Wrapper>
      <NavbarModal displayModal={isOpen} />
    </>
  );
};

export default Navbar;
