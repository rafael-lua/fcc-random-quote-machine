import { Provider } from "react-redux";
import Store from "../store/storeConfig";
import Quote from "../components/Quote"

// Main view and content
export default function Home() {
  return (
    <Provider store={ Store }>
      <Quote />
    </Provider>
  )
}
