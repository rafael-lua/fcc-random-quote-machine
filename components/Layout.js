import Meta from "./Meta";

const Layout = (props) => {
  return (
    <div>
      <Meta />
      <h1>HI, I WILL BE BECOME A HEADER!</h1>
      <main>
        {props.children}
      </main>

    </div>
  )
}

export default Layout
