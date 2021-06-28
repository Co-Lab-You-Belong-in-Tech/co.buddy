import '../styles/globals.css'
import { StepProvider } from '../contexts/StepContext'

function MyApp({ Component, pageProps }) {
  return(
    <StepProvider>
      <Component {...pageProps} />
    </StepProvider>
  )
}
 
export default MyApp
