import React, { useContext } from 'react'
import { StepContext } from '../contexts/StepContext'
import { UserContext } from '../contexts/UserContext'
export default function Role() {
  const {setStep, setProgress} = useContext(StepContext)
  const {role, setRole} = useContext(UserContext)
  
  setProgress("33%");

  return (
    <div className="flex-1">
      <button onClick={()=>setStep(2)} className="ml-5 mt-5 sm:invisible">
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M3.828 6.99968H16V8.99968H3.828L9.192 14.3637L7.778 15.7777L0 7.99968L7.778 0.22168L9.192 1.63568L3.828 6.99968Z" fill="#525252"/>
      </svg>
      </button>
      <div className="flex flex-col justify-between p-10 h-full">
        <h1 className="font-bold text-center">Which of these best describe you?</h1>
        <div className="flex flex-col justify-between h-0 sm:h-3/6" >
          <button onClick={()=>setRole("designer")} className="focus:ring-2 focus:ring-purple-600 bg-gray-200 text-left active:bg-purple-300 px-8 py-3 rounded outline-none focus:outline-none mr-1 mb-1 -my-60 sm:my-0 sm:mb-1 sm:mr-1 ease-linear transition-all duration-150" type="button">
            Designer
          </button>
          <button onClick={()=>setRole("pm")} className="focus:ring-2 focus:ring-purple-600 bg-gray-200 text-left active:bg-purple-300 px-8 py-3 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">
            Product Manager
          </button>
          <button onClick={()=>setRole("dev")} className="focus:ring-2 focus:ring-purple-600 bg-gray-200 text-left active:bg-purple-300 px-8 py-3 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">
            Developer
          </button>
          <button onClick={()=>setRole("otherrole")} className="focus:ring-2 focus:ring-purple-600 bg-gray-200 text-left active:bg-purple-300 px-8 py-3 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">
            Other
          </button>
        </div>
        <button disabled={!role} onClick={()=>setStep(4)} className="disabled:opacity-50 bg-purple-500 w-full text-white active:bg-violet-300 px-8 py-3 rounded outline-none focus:outline-none mr-1 mb-12 sm:mb-1 ease-linear transition-all duration-150" type="button">Next</button>

      </div>
    </div>
  )
}

