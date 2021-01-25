import React from 'react';

import { Wrapper, Btn } from './styles';

const GuestCountToggle = ({
  title,
  subtitle,
  incrementCount,
  decrementCount,
  count,
}) => {
  const capitalizeFirstLetter = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  return (
    <Wrapper>
      <p className="title">{capitalizeFirstLetter(title)}</p>
      <p className="subtitle">{capitalizeFirstLetter(subtitle)}</p>
      <div className="counter-container">
        <Btn onClick={incrementCount}>
          <i className="material-icons">add</i>
        </Btn>
        <span className="counter-container--counter">{count}</span>
        <Btn onClick={decrementCount}>
          <i className="material-icons">remove</i>
        </Btn>
      </div>
    </Wrapper>
  );
};

export default GuestCountToggle;
