import React, { useState, useEffect, useRef, useContext } from 'react';
import styled from 'styled-components';

import Inputbox from './Inputbox/Inputbox';
import LocationList from './LocationList/LocationList';
import GuestCount from './GuestCount/GuestCount';
import { GlobalContext } from '../../../context/GlobalState';

const ModalContent = styled.div`
  position: fixed;
  top: ${({ displayModal }) => (displayModal ? '0' : '-450px')};
  left: 0;
  height: 400px;
  width: 100%;
  z-index: 5;
  background: #fff;
  transition: all 200ms;

  .modal-form-wrapper {
    width: 90%;
    margin: 0 auto;
  }
  .modal-form {
    height: 3.7rem;
    margin-top: 3rem;
    display: grid;
    box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.3);
    border-radius: 14px;
    grid-template-columns: 40% 40% auto;
  }

  .search-btn {
    margin: auto;
    padding: 10px 0;
    background: #ff5a60;
    color: #fff;
    border: none;
    width: 120px;
    height: 95%;
    border-radius: 20px;

    &__text {
      padding-left: 8px;
      font-size: 16px;
      position: relative;
      top: -5px;
    }
  }

  .modal-filter-menu {
    display: grid;
    grid-template-columns: 40% 40%;
  }
`;

const NavbarModal = () => {
  const {
    open,
    selectedLocation,
    guests,
    filterStays,
    closeModal,
  } = useContext(GlobalContext);

  /*
   * Determine which input box has been selected.
   * Each time an input box has been clicked, state
   * for clicked input box will be set to true meanwhile
   * the other will be set to false
   **/
  const [locationFocused, setLocationFocused] = useState(true);
  const [guestFocused, setGuestFocused] = useState(false);

  const locationRef = useRef();
  const guestRef = useRef();

  useEffect(() => {
    const onInputClick = (e) => {
      /* check if both refs are mounted
       * this way when component is unmounted, the program won't
       * throw an error
       **/
      if (locationRef.current && guestRef.current) {
        if (locationRef.current.contains(e.target)) {
          setLocationFocused(true);
          setGuestFocused(false);
        } else if (guestRef.current.contains(e.target)) {
          setLocationFocused(false);
          setGuestFocused(true);
        }
      }
    };

    document.addEventListener('click', onInputClick);

    return () => {
      document.removeEventListener('click', onInputClick);
    };
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    filterStays(selectedLocation, guests);
    closeModal();
  };

  return (
    <ModalContent displayModal={open}>
      <div className="modal-form-wrapper">
        <form className="modal-form" onSubmit={handleSubmit}>
          <Inputbox
            ref={locationRef}
            focused={locationFocused}
            label="location"
            placeholder="Add location"
            value={selectedLocation}
          />
          <Inputbox
            ref={guestRef}
            focused={guestFocused}
            label="guests"
            placeholder="Add guests"
            value={guests === 0 ? '' : `${guests} guests`}
          />
          <button className="search-btn">
            <i className="material-icons">search</i>
            <span className="search-btn__text">Search</span>
          </button>
        </form>
        <div className="modal-filter-menu">
          <div className="modal-filter-menu__item">
            {locationFocused ? <LocationList /> : ''}
          </div>
          <div className="modal-filter-menu__item">
            {guestFocused ? <GuestCount /> : ''}
          </div>
        </div>
      </div>
    </ModalContent>
  );
};

export default NavbarModal;
