import Meta from "./Meta";

const Layout = (props) => {
  return (
    <div>
      <Meta />
      <main>
        <h1 className="text-primary text-bold title-border ts-3">RANDOM <em>"QUOTE"</em> MACHINE</h1>
        {props.children}
      </main>

    </div>
  )
}

export default Layout
