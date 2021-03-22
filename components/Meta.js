import Head from "next/head";

const Meta = (props) => {
  return (
    <Head>
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <meta name='keywords' content={props.keywords} />
      <meta name='description' content={props.description} />
      <meta charSet='utf-8' />
      <link rel='icon' href='/favicon.ico' />
      <title>{props.title}</title>
      <script src="https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js"></script>
    </Head>
  )
}

Meta.defaultProps = {
  title: "Random Quote Machine",
  description: "Project made for the fcc certification",
  keywords: "react, redux, next"
}

export default Meta
