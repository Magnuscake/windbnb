import styled from 'styled-components';

export const Wrapper = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(330px, 1fr));
  gap: 1.5rem 3rem;
  list-style: none;

  li {
    min-width: 330px;
  }
`;
