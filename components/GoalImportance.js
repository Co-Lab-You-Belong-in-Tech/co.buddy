import React, { useContext } from 'react'
import { StepContext } from '../contexts/StepContext'


export default function GoalImportance () {

    const {setStep} = useContext(StepContext)

    return (
      <div className="flex-1">
        <div className="flex flex-col justify-between p-10 h-full">
          <h1 className="font-bold text-center">Why is this goal important to you?</h1>
          <div className="mb-32 pt-0">
            <input type="text" placeholder="I want to achieve this goal because..." className="px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"/>
          </div>
          <button onClick={()=>setStep(7)} className="text-white bg-purple-500 w-full text-center border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Next</button>
        </div>
      </div>
    )

}