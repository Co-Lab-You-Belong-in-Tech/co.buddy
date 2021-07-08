import React, { useContext } from 'react'
import { StepContext } from '../contexts/StepContext'
import { UserContext } from '../contexts/UserContext'

export default function CareerGoal () {
    const {careerGoal, setCareerGoal} = useContext(UserContext)
    const {setStep, setProgress} = useContext(StepContext) 

    setProgress("66%");
    return (
        <div className="flex-1">
        <div className="flex flex-col justify-between p-10 h-full">
        <h1 className="font-bold text-center">What&apos; is your next career goal?</h1>
        <div className="flex flex-col justify-between h-3/6" >
          <button onClick={() => setCareerGoal("Get a job")} className="focus:ring-2 focus:ring-purple-600 bg-gray-200 text-left active:bg-purple-300 px-8 py-3 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">
            Get a job
          </button>
          <button onClick={() => setCareerGoal("Master a skill")} className="focus:ring-2 focus:ring-purple-600 bg-gray-200 text-left active:bg-purple-300 px-8 py-3 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">
            Master a skill
          </button>
          <button onClick={() => setCareerGoal("Job Search")} className="focus:ring-2 focus:ring-purple-600 bg-gray-200 text-left active:bg-purple-300 px-8 py-3 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">
            Job Search
          </button>
          <button onClick={() => setCareerGoal("Learn a Language")} className="focus:ring-2 focus:ring-purple-600 bg-gray-200 text-left active:bg-purple-300 px-8 py-3 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">
            Learn a Language
          </button>
          <button onClick={() => setCareerGoal("Other")} className="focus:ring-2 focus:ring-purple-600 bg-gray-200 text-left active:bg-purple-300 px-8 py-3 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">
            Other
          </button>
        </div>
        <button disabled={!careerGoal} onClick={()=>setStep(7)} className="disabled:opacity-50 bg-purple-500 w-full text-white active:bg-violet-300 px-8 py-3 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">Next</button>
        </div>
        </div>
      )
}