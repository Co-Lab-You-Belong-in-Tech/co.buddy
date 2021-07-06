import { createContext, useState } from 'react'

const StepContext = createContext();

const StepProvider = ({children}) => {
  const [currentStep, setStep] = useState(1);
  const [progress, setProgress] = useState("0%");
  return (
      <StepContext.Provider value={{currentStep, setStep, progress, setProgress}}>
      {children}
      </StepContext.Provider> 
  )
}

export {StepContext, StepProvider}