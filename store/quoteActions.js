// All action types will be listed here and can be imported as default by the reducers.
const actions = {
  DEBUG: "DEBUG", // For tests
  CHANGE_QUOTE: "CHANGE_QUOTE"
};

// Debug testing function to log something to the console
export const debugMsg = (msg) => {
  return {
    type: actions.DEBUG,
    msg
  }
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