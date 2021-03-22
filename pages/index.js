import { Provider } from "react-redux";
import store from "../store/storeConfig";
import Quote from "../components/Quote";
import { debugMsg, changeQuote } from "../store/quoteActions";

// Main view and content
export default function Home(props) {
  return (
    <Provider store={ store }>
      <Quote quotes={props.quotes} />
    </Provider>
  )
}

export const getStaticProps = async () => {
  const res = await fetch("http://localhost:3000/api/quotes");
  const quotes = await res.json();

  //store.dispatch(debugMsg("Async finished!"));

  store.dispatch(changeQuote({text: "First quote", author: "Async"}));

  return {
    props: {
      quotes
    }
  };
};