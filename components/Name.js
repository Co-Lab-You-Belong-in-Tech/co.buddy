import React, { useContext } from 'react'
import { StepContext } from '../contexts/StepContext'
import { UserContext } from '../contexts/UserContext'

export default function Name () {
    const {setStep} = useContext(StepContext);
    const {firstName, setFirstName} = useContext(UserContext);

    const handleNameChange = (event) => {
      setFirstName(event.target.value);  
    }

    return (
      <div className="flex-1">
        <div className="flex flex-col justify-between p-10 h-full">
          <h1 className="font-bold text-center">What&apos;s your first name?</h1>
          <form>
            <div className="mb-32 pt-0">
              <input type="text" value={firstName} onChange={handleNameChange} placeholder="First name" className="px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"/>
            </div>
            <button disabled={!firstName} onClick={()=>setStep(2)} className="disabled:opacity-50 bg-purple-500 w-full text-white active:bg-violet-300 px-8 py-3 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">Next</button>
          </form>
        </div>
      </div>

    )
}