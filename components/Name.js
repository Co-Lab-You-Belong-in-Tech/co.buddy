import React, { useContext } from 'react'
import { StepContext } from '../contexts/StepContext'
import { UserContext } from '../contexts/UserContext'

export default function Name () {
    const {setStep} = useContext(StepContext)
    const {firstName, setFirstName} = useContext(UserContext)

    const handleNameChange = (event) => {
      setFirstName(event.target.value);  
    }

    return (
      <div className="flex-1">
        <div className="flex flex-col justify-between p-10 h-full">
          <h1 className="font-bold text-center">What&apos;s your first name?</h1>
          <form>
            <div className="mb-32 pt-0">
              <input type="text" value={firstName} onChange={handleNameChange} placeholder="First name" className="px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"/>
            </div>
            <button type="submit" onClick={()=>setStep(2)} className="text-white bg-purple-500 w-full text-center border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Next</button>
          </form>
        </div>
      </div>

    )
}