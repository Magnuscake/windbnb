import React, { useContext } from 'react';
import styled from 'styled-components';

import GuestCountToggle from './GuestCountToggle/GuestCountToggle';
import { GlobalContext } from '../../../../context/GlobalState';

const Wrapper = styled.div`
  margin-left: 15px;

  & > * {
    margin-top: 35px;
  }
`;

const GuestCount = () => {
  const {
    incrementAdult,
    decrementAdult,
    incrementChildren,
    decrementChildren,
    adultCount,
    childrenCount,
  } = useContext(GlobalContext);

  return (
    <Wrapper>
      <GuestCountToggle
        incrementCount={incrementAdult}
        decrementCount={decrementAdult}
        count={adultCount}
        title="adults"
        subtitle="aged 13 or above"
      />
      <GuestCountToggle
        incrementCount={incrementChildren}
        decrementCount={decrementChildren}
        count={childrenCount}
        title="children"
        subtitle="ages 2-12"
      />
    </Wrapper>
  );
};

export default GuestCount;
