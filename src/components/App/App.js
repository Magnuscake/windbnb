import React from 'react';
import styled from 'styled-components';

import Navbar from '../Navbar/Navbar';
import GlobalStyle from './globalStyles';

const Container = styled.div`
  padding: 0 90px;
`;

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Container>
        <Navbar />
      </Container>
    </>
  );
};

export default App;
