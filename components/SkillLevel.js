import React, { useContext } from 'react'
import { StepContext } from '../contexts/StepContext'
import { UserContext } from '../contexts/UserContext'

export default function SkillLevel() {
  const {setStep, setProgress} = useContext(StepContext)
  const {skillLevel, setSkillLevel} = useContext(UserContext)

  setProgress("44%");
  return (
    <div className="flex-1">
      <div className="flex flex-col justify-between p-10 h-full">
        <h1 className="font-bold text-center">What&apos;s your skill level?</h1>
        <div className="flex flex-col justify-between h-3/6" >
          <button onClick={() => setSkillLevel("Beginner")} className="focus:ring-2 focus:ring-purple-600 bg-gray-200 text-left active:bg-purple-300 px-8 py-3 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">
            Beginner
          </button>
          <button onClick={() => setSkillLevel("Entry Level")} className="focus:ring-2 focus:ring-purple-600 bg-gray-200 text-left active:bg-purple-300 px-8 py-3 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">
            Entry Level
          </button>
          <button onClick={() => setSkillLevel("Junior")} className="focus:ring-2 focus:ring-purple-600 bg-gray-200 text-left active:bg-purple-300 px-8 py-3 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">
            Junior
          </button>
          <button onClick={() => setSkillLevel("Intermediate")} className="focus:ring-2 focus:ring-purple-600 bg-gray-200 text-left active:bg-purple-300 px-8 py-3 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">
            Intermediate
          </button>
          <button onClick={() => setSkillLevel("Senior")} className="focus:ring-2 focus:ring-purple-600 bg-gray-200 text-left active:bg-purple-300 px-8 py-3 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">
            Senior
          </button>
        </div>
        <button disabled={!skillLevel} onClick={()=>setStep(5)} className="disabled:opacity-50 bg-purple-500 w-full text-white active:bg-violet-300 px-8 py-3 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">Next</button>
      </div>
    </div>
  )
}