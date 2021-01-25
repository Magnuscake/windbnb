import React, { useState, useContext } from 'react';
import styled from 'styled-components';

import { GlobalContext } from '../../../../context/GlobalState';

const Wrapper = styled.div`
  margin: 20px 0 0 15px;

  ul {
    list-style: none;
    display: flex;
    flex-direction: column;

    .location-item {
      margin-bottom: 1.4rem;

      &:hover {
        cursor: pointer;
      }

      .material-icons {
        color: #4f4f4f;
      }

      span {
        position: relative;
        top: -5px;
        left: 6px;
      }
    }
  }
`;

const LocationList = () => {
  const { locationList, updateSelectedLocation } = useContext(GlobalContext);

  return (
    <Wrapper>
      <ul>
        {locationList.map((location, index) => (
          <li
            className="location-item"
            key={index}
            onClick={() => updateSelectedLocation(location)}
          >
            <i className="material-icons">place</i>
            <span>{location}</span>
          </li>
        ))}
      </ul>
    </Wrapper>
  );
};

export default LocationList;
