// import { connect } from "react-redux"; // Component will be exported through the connect

const Quote = (props) => {
  // Component local function to get a random quote from all the quotes passed on "props.quotes"
  const getRandomQuote = () => {

  };

  return (
    <div id="quote-box">
      <div>
        <h2 id="text">{props.text}</h2>
        <h3 id="author">By {props.author}</h3>
      </div>
      <div>
        <hr/>
        Buttons and socials
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
