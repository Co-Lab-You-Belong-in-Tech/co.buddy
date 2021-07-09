import React, { useContext } from 'react'
import { StepContext } from '../contexts/StepContext'
import { UserContext } from '../contexts/UserContext'

export default function Greetings () {
    const {setStep, setProgress} = useContext(StepContext)
    const {firstName} = useContext(UserContext)

    setProgress("22%");

    return (
      <div className="flex-1 flex flex-col lg:justify-center lg:items-center">
        <button onClick={()=>setStep(1)} className="ml-5 mt-5 sm:invisible">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3.828 6.99968H16V8.99968H3.828L9.192 14.3637L7.778 15.7777L0 7.99968L7.778 0.22168L9.192 1.63568L3.828 6.99968Z" fill="#525252"/>
          </svg>
        </button>
        <div className="flex flex-col justify-between p-10 lg:w-96 h-full lg:h-60 lg:mb-40">
          <div>
          </div>
          <div>
            <h1 className="text-center text-2xl text-purple-400 lg:mb-5">Hi {firstName}</h1>
            <p className="text-center lg:text-lg lg:mb-5">Answer a few questions to help us understand your goal and to find you an appropriate partner</p>
          </div>
          <button onClick={()=>setStep(3)} className="bg-purple-500 text-white active:bg-purple-300 px-8 py-3 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150">Next</button>
        </div>
      </div>
    )
}