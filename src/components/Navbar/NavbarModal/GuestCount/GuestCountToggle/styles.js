import styled from 'styled-components';

export const Wrapper = styled.div`
  .subtitle {
    font-weight: 300;
    font-size: 0.8rem;
  }

  .counter-container {
    margin-top: 0.7rem;

    &--counter {
      position: relative;
      top: -3px;
      padding: 0 1rem;
    }
  }
`;

export const Btn = styled.button`
  width: 30px;
  height: 30px;
  background: #fff;
  border: 1px solid #000;
  border-radius: 4px;

  i {
    position: relative;
    top: 2px;
  }
`;
