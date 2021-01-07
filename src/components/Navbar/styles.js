import styled from 'styled-components';

export const Wrapper = styled.div`
  margin-top: 1rem;
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: space-between;

  .logo {
    max-height: 30px;
    width: auto;
  }

  .input-container {
    width: 370px;
    padding: 0 20px;
    display: flex;
    justify-content: space-evenly;
    border-radius: 15px;
    box-shadow: 0px 0px 3px 0px rgba(122, 122, 122, 0.6);

    .divider {
      width: 1px;
      height: 100%;
      background: rgba(0, 0, 0, 0.24);
    }

    &__location {
      margin: auto;
      flex-grow: 1;
    }

    &__guests {
      margin: auto;
      width: 140px;
      color: rgba(0, 0, 0, 0.24);
    }

    &__search-icon {
      margin: auto;
      width: 28px;
    }
  }
`;
