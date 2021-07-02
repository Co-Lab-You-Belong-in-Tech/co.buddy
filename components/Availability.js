import React, { useContext } from 'react'
import { StepContext } from '../contexts/StepContext'
import { UserContext } from '../contexts/UserContext'

export default function Availability () {
    const {setStep} = useContext(StepContext)
    const {setAvailability} = useContext(UserContext)
  
    return (
        <div className="flex-1">
          <div className="flex flex-col justify-between p-10 h-full">
            <h1 className="font-bold text-center">How&apos; often will you be available for accountability sessions if you&apos;re paired?</h1>
            <div className="flex flex-col justify-between h-3/6" >
              <button onClick={() => setAvailability("everyday")} className="focus:ring-2 focus:ring-purple-600 bg-gray-200 text-left active:bg-purple-300 px-8 py-3 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">
                Everyday
              </button>
              <button onClick={() => setAvailability("weekly")} className="focus:ring-2 focus:ring-purple-600 bg-gray-200 text-left active:bg-purple-300 px-8 py-3 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">
                Once a week
              </button>
              <button onClick={() => setAvailability("biweekly")} className="focus:ring-2 focus:ring-purple-600 bg-gray-200 text-left active:bg-purple-300 px-8 py-3 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">
                Once every 2 weeks
              </button>
              <button onClick={() => setAvailability("monthly")} className="focus:ring-2 focus:ring-purple-600 bg-gray-200 text-left active:bg-purple-300 px-8 py-3 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">
                Once a month
              </button>
            </div>
            <button onClick={()=>setStep(8)} className="bg-purple-500 text-white active:bg-violet-300 px-8 py-3 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">
                Next
            </button>
          </div>
        </div>
    )
}