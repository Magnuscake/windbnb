import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  height: 50px;
  margin-top: 3rem;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  color: #707070;

  div {
    width: 380px;
    height: 1px;
    background: #707070;
  }
`;

const Footer = () => {
  return (
    <Wrapper>
      <div></div>
      <p>Made by Saney</p>
    </Wrapper>
  );
};

export default Footer;
