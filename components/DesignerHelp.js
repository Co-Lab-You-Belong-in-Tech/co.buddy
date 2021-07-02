import React, { useContext } from 'react'
import { StepContext } from '../contexts/StepContext'
export default function DesignerHelp() {
  const {setStep} = useContext(StepContext)  
  return (
    <div className="flex-1">
      <div className="flex flex-col justify-between p-10 h-full">
        <h1 className="font-bold text-center">What&apos; do you need help with?</h1>
        <div className="flex flex-col justify-between h-3/6" >
          <button className="focus:ring-2 focus:ring-purple-600 bg-gray-200 text-left active:bg-purple-300 px-8 py-3 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">
            Design Tools
          </button>
          <button className="focus:ring-2 focus:ring-purple-600 bg-gray-200 text-left active:bg-purple-300 px-8 py-3 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">
            UX Research
          </button>
          <button className="focus:ring-2 focus:ring-purple-600 bg-gray-200 text-left active:bg-purple-300 px-8 py-3 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">
            Portfolio/Interview Preparation
          </button>
          <button className="focus:ring-2 focus:ring-purple-600 bg-gray-200 text-left active:bg-purple-300 px-8 py-3 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">
            Time Management
          </button>
          <button className="focus:ring-2 focus:ring-purple-600 bg-gray-200 text-left active:bg-purple-300 px-8 py-3 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">
            Other
          </button>
        </div>
        <button onClick={()=>setStep(5)} className="bg-purple-500 text-white active:bg-purple-300 px-8 py-3 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">
            Next
        </button>
      </div>
    </div>
  )
}