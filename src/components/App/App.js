import React, { useContext } from 'react';
import styled from 'styled-components';

import Navbar from '../Navbar/Navbar';
import StaysList from '../StaysList/StaysList';
import Footer from '../Footer/Footer';

import { GlobalContext } from '../../context/GlobalState';
import GlobalStyle, { Overlay } from './globalStyles';

const Container = styled.div`
  padding: 0 90px;
`;

const App = () => {
  const { open } = useContext(GlobalContext);

  return (
    <>
      <GlobalStyle open={open} />
      <Overlay open={open} />
      <Container>
        <Navbar />
        <StaysList />
      </Container>
      <Footer />
    </>
  );
};

export default App;
