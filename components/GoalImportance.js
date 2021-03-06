import React, { useContext } from 'react'
import { StepContext } from '../contexts/StepContext'
import { UserContext } from '../contexts/UserContext'


export default function GoalImportance () {

    const {setStep, setProgress} = useContext(StepContext)
    const {goalImportance, setGoalImportance} = useContext(UserContext)

    setProgress("77%");

    const handleGoalChange = (event) => {
      setGoalImportance(event.target.value);  
    }

    return (
      <div className="flex-1">
        <button onClick={()=>setStep(6)} className="ml-5 mt-5 sm:invisible">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3.828 6.99968H16V8.99968H3.828L9.192 14.3637L7.778 15.7777L0 7.99968L7.778 0.22168L9.192 1.63568L3.828 6.99968Z" fill="#525252"/>
            </svg>
        </button>
        <div className="flex flex-col justify-between p-10 h-full">
          <h1 className="font-bold text-center">Why is this goal important to you?</h1>
          <div className="sm:mb-16 sm:my-0 -my-40 mb-32 pt-0">
            <input type="text" value={goalImportance} onChange={handleGoalChange}placeholder="I want to achieve this goal because..." className="px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-white rounded text-sm border-0 border-b-2 border-grey-dark outline-none focus:outline-none focus:ring w-full"/>
          </div>
          <button disabled={!goalImportance} onClick={()=>setStep(8)} className="disabled:opacity-50 bg-purple-500 w-full text-white active:bg-violet-300 px-8 py-3 rounded outline-none focus:outline-none mr-1 mb-12 sm:mb-1 ease-linear transition-all duration-150" type="button">Next</button>
        </div>
      </div>
    )

}