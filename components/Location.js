import React, { useContext } from 'react'
import { StepContext } from '../contexts/StepContext'

export default function Location () {
    const {setStep} = useContext(StepContext)

    return(
      <div className="flex-1">
        <div className="flex flex-col justify-between p-10 h-full">
          <h1 className="font-bold text-center">What&apos;s your location?</h1>
          <div className="mb-32 pt-0">
            <input type="text" placeholder="Location" className="px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"/>
          </div>
          <button onClick={()=>setStep(9)} className="text-white bg-purple-500 w-full text-center border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Next</button>
        </div>
      </div>
    )

}