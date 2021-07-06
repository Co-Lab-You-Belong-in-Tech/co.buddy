import '../styles/globals.css'
import { StepProvider } from '../contexts/StepContext'
import { AuthContext } from '../contexts/AuthContext'
import { UserContext, UserProvider } from '../contexts/UserContext'
import {useUserData} from '../lib/hooks'

function MyApp({ Component, pageProps }) {

  const userData = useUserData();

  return(
    <>
      <AuthContext.Provider value={userData}>
        <UserProvider>
          <StepProvider>
            <Component {...pageProps} />
          </StepProvider>
        </UserProvider>
      </AuthContext.Provider>
    </>
  )
}
 
export default MyApp
