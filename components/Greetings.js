import React, { useContext } from 'react'
import { StepContext } from '../contexts/StepContext'
import { UserContext } from '../contexts/UserContext'

export default function Greetings () {
    const {setStep, setProgress} = useContext(StepContext)
    const {firstName} = useContext(UserContext)

    setProgress("22%");

    return (
      <div className="flex-1 flex flex-col lg:justify-center lg:items-center">
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