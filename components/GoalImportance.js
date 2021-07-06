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
        <div className="flex flex-col justify-between p-10 h-full">
          <h1 className="font-bold text-center">Why is this goal important to you?</h1>
          <div className="mb-32 pt-0">
            <input type="text" value={goalImportance} onChange={handleGoalChange}placeholder="I want to achieve this goal because..." className="px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"/>
          </div>
          <button disabled={!goalImportance} onClick={()=>setStep(8)} className="disabled:opacity-50 bg-purple-500 w-full text-white active:bg-violet-300 px-8 py-3 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">Next</button>
        </div>
      </div>
    )

}