// All action types will be listed here and can be imported as default by the reducers.
const actions = {
  CHANGE_QUOTE: "CHANGE QUOTE"
};

// Receives a new quote to update the state
export const changeQuote = (quote) => {
  return {
    type: actions.CHANGE_QUOTE,
    quote
  }
};


// Defaults to actions types
export default actions;