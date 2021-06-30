import '../styles/globals.css'
import { StepProvider } from '../contexts/StepContext'
import { AuthContext } from '../contexts/AuthContext'
import {useUserData} from '../lib/hooks'

function MyApp({ Component, pageProps }) {

  const userData = useUserData();

  return(
    <>
      <AuthContext.Provider value={userData}>
        <StepProvider>
          <Component {...pageProps} />
        </StepProvider>
      </AuthContext.Provider>
    </>
  )
}
 
export default MyApp
