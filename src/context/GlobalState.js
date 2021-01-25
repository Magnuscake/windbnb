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

  // show or hide the model component info (location, guests)
  const [showLocations, setShowLocations] = useState(false);
  const [showGuests, setShowGuests] = useState(false);

  const [state, dispatch] = useReducer(AppReducer, initialState);

  const guests = state.adultCount + state.childrenCount;

  useEffect(() => {
    setStays(data);

    setLocationList([
      ...new Set(stays.map((stay) => `${stay.city}, ${stay.country}`)),
    ]);
  }, [stays]);

  const filterStays = (location, guests) => {
    const filteredStays = stays.filter(
      (stay) =>
        `${stay.city}, ${stay.country}` === location && stay.maxGuests >= guests
    );

    if (location?.length === 0) {
      // reset stays
      setStays(data);
    } else {
      setStays(filteredStays);
    }
  };

  const updateShowList = (list) => {
    list === 'location' ? setShowLocations(true) : setShowLocations(false);

    list === 'guests' ? setShowGuests(true) : setShowGuests(false);
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
        updateShowList,
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
