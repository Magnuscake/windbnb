import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  margin: 20px 0 0 15px;

  ul {
    list-style: none;

    .location-item span {
      position: relative;
      top: -5px;
      left: 6px;
    }
  }
`;

const LocationList = () => {
  return (
    <Wrapper>
      <ul>
        <li className="location-item">
          <i className="material-icons">place</i>
          <span>Location 1</span>
        </li>
      </ul>
    </Wrapper>
  );
};

export default LocationList;
