import { createContext, useState } from 'react'

const StepContext = createContext();

const StepProvider = ({children}) => {
  const [currentStep, setStep] = useState(1);
  return (
      <StepContext.Provider value={{currentStep, setStep}}>
      {children}
      </StepContext.Provider> 
  )
}

export {StepContext, StepProvider}