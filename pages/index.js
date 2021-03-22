//import { Provider } from "react-redux";
//import store from "../store/storeConfig";
import Quote from "../components/Quote";
//import { debugMsg, changeQuote } from "../store/quoteActions";

//store.dispatch(debugMsg("Async finished!"));

// Main view and content
export default function Home(props) {
  // <Provider store={ store }> </Provider>
  return (
    <Quote quotes={props.quotes} />
  )
}

export const getStaticProps = async () => {
  const res = await fetch("http://localhost:3000/api/quotes");
  const quotes = await res.json();

  return {
    props: {
      quotes
    }
  };
};