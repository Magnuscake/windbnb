import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Noto Sans JP', sans-serif;
  }
`;

export const Overlay = styled.div`
  height: 100vh;
  width: 100vw;
  position: fixed;
  display: ${({ open }) => (open ? 'block' : 'none')};
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
`;

export default GlobalStyle;
