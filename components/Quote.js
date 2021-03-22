// import { connect } from "react-redux"; // Component will be exported through the connect
import { useState, useEffect } from "react";

const Quote = (props) => {
  const [quoteState, setQuoteState] = useState(
    {
      text: "Quotes are beautiful.",
      author: "Random Quote Machine"
    }
  );

  // Component local function to get a random quote from all the quotes passed on "props.quotes"
  const getRandomQuote = () => {
    let randId = Math.floor(Math.random() * props.quotes.length);
    const newQuote = props.quotes[randId];
    setQuoteState({...quoteState, text: newQuote.text, author: newQuote.author});
  };

  // First random quote through a effect. Pass an empty array so th effect happens only once.
  // (https://reactjs.org/docs/hooks-effect.html#tip-optimizing-performance-by-skipping-effects)
  // (https://css-tricks.com/run-useeffect-only-once/ or https://stackoverflow.com/questions/53120972/how-to-call-loading-function-with-react-useeffect-only-once)
  useEffect(() => {
    getRandomQuote();
  }, []); // Only re-run the effect if these variables changes. Empty array will make so it runs only once.


  return (
    <div id="quote-box">
      <div>
        <h2 id="text">{quoteState.text}</h2>
        <h3 id="author">By {quoteState.author}</h3>
      </div>
      <div>
        <hr/>
        <div className="quote-bottom-wrapper">
          <button id="new-quote" onClick={getRandomQuote} className="btn-main">New Quote</button>
          <div>
            <a id="tweet-quote" href="#">T</a>
          </div>
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
