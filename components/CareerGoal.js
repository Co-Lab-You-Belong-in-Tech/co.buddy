import React, { useContext } from 'react'
import { StepContext } from '../contexts/StepContext'
import { UserContext } from '../contexts/UserContext'

export default function CareerGoal () {
    const {careerGoal, setCareerGoal} = useContext(UserContext)
    const {setStep, setProgress} = useContext(StepContext) 

    setProgress("66%");
    return (
        <div className="flex-1">
          <button onClick={()=>setStep(5)} className="ml-5 mt-5 sm:invisible">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3.828 6.99968H16V8.99968H3.828L9.192 14.3637L7.778 15.7777L0 7.99968L7.778 0.22168L9.192 1.63568L3.828 6.99968Z" fill="#525252"/>
            </svg>
          </button>
          <div className="flex flex-col justify-between p-10 h-full">
            <h1 className="font-bold text-center">What&apos; is your next career goal?</h1>
            <div className="flex flex-col justify-between h-0 sm:h-3/6" >
              <button onClick={() => setCareerGoal("Get a job")} className="focus:ring-2 focus:ring-purple-600 bg-gray-200 text-left active:bg-purple-300 px-8 py-3 rounded outline-none focus:outline-none mr-1 mb-4 -my-60 sm:-my-10 sm:mb-5 sm:mr-1 ease-linear transition-all duration-150" type="button">
                Get a job
              </button>
              <button onClick={() => setCareerGoal("Master a skill")} className="focus:ring-2 focus:ring-purple-600 bg-gray-200 text-left active:bg-purple-300 px-8 py-3 rounded outline-none focus:outline-none mr-1 mb-4 sm:mb-5 ease-linear transition-all duration-150" type="button">
                Master a skill
              </button>
              <button onClick={() => setCareerGoal("Improve collaboration")} className="focus:ring-2 focus:ring-purple-600 bg-gray-200 text-left active:bg-purple-300 px-8 py-3 rounded outline-none focus:outline-none mr-1 mb-4 sm:mb-5 ease-linear transition-all duration-150" type="button">
                Improve collaboration
              </button>
              <button onClick={() => setCareerGoal("Learn a Language")} className="focus:ring-2 focus:ring-purple-600 bg-gray-200 text-left active:bg-purple-300 px-8 py-3 rounded outline-none focus:outline-none mr-1 mb-4 sm:mb-5 ease-linear transition-all duration-150" type="button">
                Learn a Language
              </button>
              <button onClick={() => setCareerGoal("Other")} className="focus:ring-2 focus:ring-purple-600 bg-gray-200 text-left active:bg-purple-300 px-8 py-3 rounded outline-none focus:outline-none mr-1 mb-4 sm:mb-5 ease-linear transition-all duration-150" type="button">
                Other
              </button>
            </div>
            <button disabled={!careerGoal} onClick={()=>setStep(7)} className="disabled:opacity-50 bg-purple-500 w-full text-white active:bg-violet-300 px-8 py-3 rounded outline-none focus:outline-none mr-1 mb-12 sm:mb-1 ease-linear transition-all duration-150" type="button">Next</button>
        </div>
      </div>
    )
}