import React, { useContext } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  img {
    max-width: 23rem;
    border-radius: 15px;
  }

  .title {
    font-weight: 500;
  }
`;

const StaysListItem = ({ data }) => {
  const { photo, title } = data;

  return (
    <Wrapper>
      <img src={photo} alt={title} />
      <p className="title">{title}</p>
    </Wrapper>
  );
};

export default StaysListItem;
