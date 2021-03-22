import actions from "./quoteActions"

// State has only a initial value, that will be updated once the quotes are asynchronously loaded
const quoteState = {
  text: "Quotes are still being loaded...",
  author: "API SERVER"
};

const quoteReducer = (state = quoteState, action) => {
  switch(action.type) {

    case actions.CHANGE_QUOTE:
      // Create a new state with the new quote
      let newState = {...state};
      newState.text = action.quote.text;
      newState.author = action.quote.author;
      return newState;

    case actions.DEBUG:
      console.log("ACTION SENT! MESSAGE: " + action.msg);
      return state;

    default:
      return state;
  }
};

export default quoteReducer;