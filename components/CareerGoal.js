import React, { useContext } from 'react'
import { StepContext } from '../contexts/StepContext'

export default function CareerGoal () {

    const {setStep} = useContext(StepContext) 
    return (
        <div className="flex-1">
        <div className="flex flex-col justify-between p-10 h-full">
        <h1 className="font-bold text-center">What&apos; is your next career goal?</h1>
        <div className="flex flex-col justify-between h-3/6" >
          <button className="bg-gray-200 text-left active:bg-purple-300 px-8 py-3 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">
            Get a job
          </button>
          <button className="bg-gray-200 text-left active:bg-purple-300 px-8 py-3 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">
            Master a skill
          </button>
          <button className="bg-gray-200 text-left active:bg-purple-300 px-8 py-3 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">
            Job Search
          </button>
          <button className="bg-gray-200 text-left active:bg-purple-300 px-8 py-3 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">
            Learn a Language
          </button><button className="bg-gray-200 text-left active:bg-purple-300 px-8 py-3 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">
            Other
          </button>
        </div>
        <button onClick={()=>setStep(6)} className="bg-purple-500 text-white active:bg-violet-300 px-8 py-3 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">
            Next
        </button>
        </div>
        </div>
      )
}