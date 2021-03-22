// State has only a initial value, that will be updated once the quotes are asynchronously loaded
const quoteState = {
  quote: "Quotes are still being loaded...",
  author: "API SERVER"
};

const quoteReducer = (state = quoteState, action) => {
  return state;
};

export default quoteReducer;