import React, { useContext } from 'react'
import { StepContext } from '../contexts/StepContext'

export default function Greetings () {
    const {setStep} = useContext(StepContext)

    return (
        <div className="h-screen container mx-auto flex px-7 py-4 md:flex-row flex-col items-center justify-end">
        <div className="lg:flex-grow h-3/6 md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-center md:text-left md:mb-0 items-center text-center">
          <p className="mb-15 leading-relaxed">Hi instert name here</p>
          <p className="mb-32 leading-relaxed">Answer a few questions to help us understand your goal and to find you an appropriate partner</p>
          <div className="flex w-full justify-center mb-5">
          <button onClick={()=>setStep(3)} className="text-white w-full text-center bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Next</button>
        </div>
        </div>
      </div>
    )
}