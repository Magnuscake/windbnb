import styled from 'styled-components';

export const Wrapper = styled.div`
  margin: 1rem 0 2.5rem 0;
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: space-between;

  .logo {
    max-height: 30px;
    width: auto;
  }

  .input-container {
    width: 390px;
    display: grid;
    grid-template-columns: 50% 35% 15%;
    border-radius: 15px;
    box-shadow: 0px 0px 3px 0px rgba(122, 122, 122, 0.6);

    &__input {
      background: #fff;
      border: none;
      padding: 0.8rem;
      border-right: 1px solid rgba(0, 0, 0, 0.1);
      border-radius: 15px 0 0 15px;
      outline: none;
    }

    &__search-icon {
      color: #ff5a60;
      margin: auto;
      width: 28px;
    }
  }
`;
