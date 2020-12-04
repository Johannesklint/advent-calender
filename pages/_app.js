import "../styles/globals.css"

function MyApp({ Component, pageProps }) {
  return (
    <div className="more-snow">
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
