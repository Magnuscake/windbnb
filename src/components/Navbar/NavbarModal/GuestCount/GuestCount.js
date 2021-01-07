import React from 'react';
import styled from 'styled-components';

import GuestCountToggle from './GuestCountToggle/GuestCountToggle';

const Wrapper = styled.div`
  margin-left: 15px;
  & > * {
    margin-top: 35px;
  }
`;

const GuestCount = () => {
  return (
    <Wrapper>
      <GuestCountToggle title="adults" subtitle="aged 13 or above" />
      <GuestCountToggle title="children" subtitle="ages 2-12" />
    </Wrapper>
  );
};

export default GuestCount;
