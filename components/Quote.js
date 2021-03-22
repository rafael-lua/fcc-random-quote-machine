// import { connect } from "react-redux"; // Component will be exported through the connect
import { useState } from "react";

const Quote = (props) => {
  const [quoteState, setQuoteState] = useState(
    {
      text: "Quotes are beautiful.",
      author: "Random Quote Machine"
    }
  );

  // Component local function to get a random quote from all the quotes passed on "props.quotes"
  const getRandomQuote = () => {
    const newQuote = props.quotes[0];
    setQuoteState({...quoteState, text: newQuote.text, author: newQuote.author});
  };

  return (
    <div id="quote-box">
      <div>
        <h2 id="text">{quoteState.text}</h2>
        <h3 id="author">By {quoteState.author}</h3>
      </div>
      <div>
        <hr/>
        <div class="quote-bottom-wrapper">
          <button id="new-quote" onClick={getRandomQuote} class="btn-main">New Quote</button>
        </div>
      </div>
    </div>
  )
}

export default Quote;

/*

// Mapping the state to the component props
const mapStateToProps = (state) => {
  return state;
}

// Mapping dispatchs actions to the component props (https://react-redux.js.org/using-react-redux/connect-mapdispatch#defining-mapdispatchtoprops-as-an-object)


export default connect(mapStateToProps, null)(Quote);

*/
