import actions from "./quoteActions"

// State has only a initial value, that will be updated once the quotes are asynchronously loaded
const quoteState = {
  quote: "Quotes are still being loaded...",
  author: "API SERVER"
};

const quoteReducer = (state = quoteState, action) => {
  switch(action) {
    case actions.CHANGE_QUOTE:
      // do something
      break;
    default:
      return state;
  }
};

export default quoteReducer;