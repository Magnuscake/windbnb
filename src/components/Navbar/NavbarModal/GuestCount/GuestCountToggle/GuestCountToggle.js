import React, { useState } from 'react';

import { Wrapper, Btn } from './styles';

const GuestCountToggle = ({ title, subtitle }) => {
  const [count, setCount] = useState(0);

  return (
    <Wrapper>
      <p className="title">{title}</p>
      <p className="subtitle">{subtitle}</p>
      <div className="counter-container">
        <Btn onClick={() => setCount(count + 1)}>
          <i className="material-icons">add</i>
        </Btn>
        <span className="counter-container--counter">{count}</span>
        <Btn onClick={() => (count === 0 ? count : setCount(count - 1))}>
          <i className="material-icons">remove</i>
        </Btn>
      </div>
    </Wrapper>
  );
};

export default GuestCountToggle;
