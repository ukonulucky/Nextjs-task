import Footer from '../components/footer'
import Header from '../components/header'
import '../styles/globals.css'
import "../styles/footer.css"
import {  SessionProvider } from "next-auth/react"
function MyApp({ Component, pageProps }) {

  if (Component.getLayout) {
    return
    <SessionProvider session={ pageProps.session}>
    <div>
      {
        Component.getLayout(<Component {...pageProps} />)
      }
      </div>
      </SessionProvider>
}

  return <>
      <SessionProvider session={pageProps.session}>
    <Header />
    <Component {...pageProps} />
      <Footer />
      </SessionProvider>
  </>
}

export default MyApp
