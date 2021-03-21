import { connect } from "react-redux"; // Component will be exported through the connect

const Quote = (props) => {
  return (
    <div id="quote-box">
      <div>
        <h2 id="text">QUOTE</h2>
        <h3 id="author">BY AUTHOR</h3>
      </div>
      <div>
        <hr/>
        Buttons and socials
      </div>
    </div>
  )
}

// Mapping the state to the component props
const mapStateToProps = (state) => {
  return state;
}

export default connect(mapStateToProps, null)(Quote);
