import { Provider } from "react-redux";
import Store from "../store/storeConfig";
import Quote from "../components/Quote"

// Main view and content
export default function Home(props) {
  return (
    <Provider store={ Store }>
      <Quote quotes={props.quotes} />
    </Provider>
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