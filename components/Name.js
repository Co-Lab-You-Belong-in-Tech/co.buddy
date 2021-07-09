import React, { useContext } from 'react'
import { StepContext } from '../contexts/StepContext'
import { UserContext } from '../contexts/UserContext'

export default function Name () {
    const {setStep, setProgress} = useContext(StepContext);
    const {firstName, setFirstName} = useContext(UserContext);

    setProgress("11%");
    const handleNameChange = (event) => {
      setFirstName(event.target.value);  
    }

    return (
      <div className="flex-1 flex flex-col lg:justify-center lg:items-center">
        <div className="flex flex-col justify-between p-10 lg:w-96 h-full lg:h-60 lg:mb-40">
          <h1 className="font-bold text-center text-gray-800 lg:text-xl">What&apos;s your first name?</h1>
          <form className="flex flex-col justify-between h-2/4">
            <div className="sm:mb-16 sm:my-0 -my-40 mb-32 pt-0">
              <input type="text" value={firstName} onChange={handleNameChange} placeholder="First name" className="text-center sm:text-center px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-white rounded text-sm border-0 border-b-2 border-grey-dark outline-none focus:outline-none focus:ring w-full"/>
            </div>
            <button disabled={!firstName} onClick={()=>setStep(2)} className="disabled:opacity-50 bg-purple-500 w-full text-white active:bg-violet-300 px-8 py-3 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-opacity duration-150" type="button">Next</button>
          </form>
        </div>
      </div>

    )
}