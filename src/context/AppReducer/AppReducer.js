export default (state, action) => {
  switch (action.type) {
    case 'TOGGLE_MODAL':
      return {
        ...state,
        open: !state.open,
      };
    case 'CLOSE_MODAL':
      return {
        ...state,
        open: false,
      };
    case 'UPDATE_SELECTED_LOCATION':
      return {
        ...state,
        selectedLocation: action.payload,
      };
    case 'INCREMENT_ADULT_COUNT':
      return {
        ...state,
        adultCount: state.adultCount + 1,
      };
    case 'DECREMENT_ADULT_COUNT':
      return {
        ...state,
        adultCount: state.adultCount > 0 ? state.adultCount - 1 : 0,
      };
    case 'INCREMENT_CHILDREN_COUNT':
      return {
        ...state,
        childrenCount: state.childrenCount + 1,
      };
    case 'DECREMENT_ADULT_COUNT':
      return {
        ...state,
        childrenCount: state.childrenCount > 0 ? state.childrenCount - 1 : 0,
      };
    default:
      return state;
  }
};
