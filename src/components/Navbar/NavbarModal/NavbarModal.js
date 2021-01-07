import React from 'react';
import styled from 'styled-components';

import Inputbox from './Inputbox/Inputbox';
import LocationList from './LocationList/LocationList';
import GuestCount from './GuestCount/GuestCount';

const Wrapper = styled.div`
  display: ${({ displayModal }) => (displayModal ? 'block' : 'none')};
  position: absolute;
  top: 0;
  left: 0;
  height: 60vh;
  width: 100%;
  background: #fff;

  .filter-container {
    padding-top: 3rem;
    height: 50px;
    display: flex;
    justify-content: space-evenly;
  }

  .search-btn {
    background: #ff5a60;
    color: #fff;
    border: none;
    width: 120px;
    border-radius: 15px;

    &__text {
      padding-left: 8px;
      font-size: 16px;
      position: relative;
      top: -5px;
    }
  }
`;

const NavbarModal = ({ displayModal }) => {
  return (
    <Wrapper displayModal={displayModal}>
      <div className="filter-container">
        <div className="filter-container__control">
          <Inputbox />
          <LocationList />
        </div>
        <div className="filter-container__control">
          <Inputbox />
          <GuestCount />
        </div>
        <button className="search-btn">
          <i className="material-icons">search</i>
          <span className="search-btn__text">Search</span>
        </button>
      </div>
    </Wrapper>
  );
};

export default NavbarModal;
