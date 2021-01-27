import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;

  img {
    width: 100%;
    height: 240px;
    margin-bottom: 4px;
    border-radius: 15px;
    object-fit: cover;
  }

  .stay-info {
    width: 100%;
    margin: 0.2rem 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 0.9em;

    &__superhost {
      border: 1px solid #000;
      border-radius: 20px;
      padding: 3px 11px;
      font-size: 0.8em;
    }

    &__type {
      flex-grow: 2;
      padding: 0 0.6rem;
      color: #707070;
    }

    &__rating {
      display: grid;
      place-items: center;
      grid-template-columns: 1fr 1fr;
      gap: 3px;

      i {
        color: #ff5a60;
      }
    }
  }

  .title {
    font-weight: 500;
  }
`;

const StaysListItem = ({ data }) => {
  const { photo, superHost, title, type, beds, rating } = data;

  return (
    <Container>
      <img src={photo} alt={title} />
      <div className="stay-info">
        {superHost ? (
          <div className="stay-info__superhost">SUPER HOST</div>
        ) : (
          ''
        )}
        <p className="stay-info__type">{`${type}${
          beds ? '. ' + beds + ' beds' : ''
        }`}</p>
        <div className="stay-info__rating">
          <i className="material-icons">star</i>
          <span>{rating}</span>
        </div>
      </div>
      <p className="title">{title}</p>
    </Container>
  );
};

export default StaysListItem;
