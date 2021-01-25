import React, { useContext } from 'react';

import StaysListItem from './StaysListItem/StaysListItem';

import { GlobalContext } from '../../context/GlobalState';

const StaysList = () => {
  const { stays } = useContext(GlobalContext);

  return (
    <>
      {stays.map((stay) => (
        <StaysListItem data={stay} />
      ))}
    </>
  );
};

export default StaysList;
