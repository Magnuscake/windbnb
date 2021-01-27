import React, { useContext } from 'react';

import StaysListItem from './StaysListItem/StaysListItem';
import { Wrapper } from './styles';

import { GlobalContext } from '../../context/GlobalState';

const StaysList = () => {
  const { stays } = useContext(GlobalContext);

  return (
    <Wrapper>
      {stays.map((stay) => (
        <li>
          <StaysListItem data={stay} />
        </li>
      ))}
    </Wrapper>
  );
};

export default StaysList;
