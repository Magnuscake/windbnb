import React, { createContext, useEffect, useReducer, useState } from 'react';

import AppReducer from './AppReducer/AppReducer';

import data from '../assets/stays.json';

const initialState = {
  open: false,
  selectedLocation: null,
  adultCount: 0,
  childrenCount: 0,
};

// Context
export const GlobalContext = createContext(initialState);

// Provider
export const GlobalProvider = ({ children }) => {
  const [stays, setStays] = useState([]);

  // store the list of unique locations
  const [locationList, setLocationList] = useState([]);

  const [state, dispatch] = useReducer(AppReducer, initialState);

  const guests = state.adultCount + state.childrenCount;

  useEffect(() => {
    setStays(data);
  }, []);

  useEffect(() => {
    setLocationList([
      ...new Set(stays.map((stay) => `${stay.city}, ${stay.country}`)),
    ]);
  }, [stays]);

  const filterStays = (location, guests) => {
    const filteredStays = stays.filter(
      (stay) =>
        `${stay.city}, ${stay.country}` === location && stay.maxGuests >= guests
    );

    console.log(location?.length === 0);

    if (location?.length === 0) {
      setStays(data);
    } else {
      setStays(filteredStays);
    }
    console.log(filteredStays);
  };

  // Actions
  function toggleModalOpen() {
    dispatch({
      type: 'TOGGLE_MODAL',
    });
  }

  function closeModal() {
    dispatch({
      type: 'CLOSE_MODAL',
    });
  }

  function updateSelectedLocation(location) {
    dispatch({
      type: 'UPDATE_SELECTED_LOCATION',
      payload: location,
    });
  }

  function incrementAdult() {
    dispatch({
      type: 'INCREMENT_ADULT_COUNT',
    });
  }

  function decrementAdult() {
    dispatch({
      type: 'DECREMENT_ADULT_COUNT',
    });
  }

  function incrementChildren() {
    dispatch({
      type: 'INCREMENT_CHILDREN_COUNT',
    });
  }

  function decrementChildren() {
    dispatch({
      type: 'DECREMENT_CHILDREN_COUNT',
    });
  }

  return (
    <GlobalContext.Provider
      value={{
        stays,
        filterStays,
        open: state.open,
        adultCount: state.adultCount,
        childrenCount: state.childrenCount,
        selectedLocation: state.selectedLocation,
        guests,
        locationList,
        updateSelectedLocation,
        toggleModalOpen,
        closeModal,
        incrementAdult,
        decrementAdult,
        incrementChildren,
        decrementChildren,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
