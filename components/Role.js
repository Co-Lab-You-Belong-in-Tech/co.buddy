import React, { useContext } from 'react'
import { StepContext } from '../contexts/StepContext'
export default function Role() {
  const {setStep} = useContext(StepContext)  
  return (
    <div className="flex-1">
      <div className="flex flex-col justify-between p-10 h-full">
        <h1 className="font-bold text-center">Which of these best describe you?</h1>
        <div className="flex flex-col justify-between h-3/6" >
          <button className="bg-gray-200 text-left active:bg-purple-300 px-8 py-3 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">
            Designer
          </button>
          <button className="bg-gray-200 text-left active:bg-purple-300 px-8 py-3 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">
            Product Manager
          </button>
          <button className="bg-gray-200 text-left active:bg-purple-300 px-8 py-3 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">
            Developer
          </button>
          <button className="bg-gray-200 text-left active:bg-purple-300 px-8 py-3 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">
            Other
          </button>
        </div>
        <button onClick={()=>setStep(4)} className="bg-purple-500 text-white active:bg-violet-300 px-8 py-3 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">
            Next
        </button>
      </div>
    </div>
  )
}
