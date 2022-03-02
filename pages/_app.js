import { ToastContainer } from 'react-toastify';
import { UserProvider } from '@auth0/nextjs-auth0';


import 'react-toastify/dist/ReactToastify.css'
import '@styles/globals.css'

const Noop = ({children}) => <>{children}</>

function MyApp({ Component, pageProps }) {
  
  const Layout = Component.Layout ?? Noop

  return (
    <UserProvider>
      <Layout>
        <ToastContainer />
        <Component {...pageProps} />
      </Layout>
    </UserProvider>
  )
}

export default MyApp
