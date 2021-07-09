import React, { useContext } from 'react'
import { StepContext } from '../contexts/StepContext'
import { UserContext } from '../contexts/UserContext'

export default function Availability () {
    const {setStep, setProgress} = useContext(StepContext)
    const {availability, setAvailability} = useContext(UserContext)

    setProgress("82%");
    return (
        <div className="flex-1">
          <button onClick={()=>setStep(7)} className="ml-5 mt-5 sm:invisible">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3.828 6.99968H16V8.99968H3.828L9.192 14.3637L7.778 15.7777L0 7.99968L7.778 0.22168L9.192 1.63568L3.828 6.99968Z" fill="#525252"/>
            </svg>
          </button>
          <div className="flex flex-col justify-between p-10 h-full">
            <h1 className="font-bold text-center">How often will you be available for accountability sessions if you&apos;re paired?</h1>
            <div className="flex flex-col justify-between h-0 sm:h-3/6" >
              <button onClick={() => setAvailability("Everyday")} className="focus:ring-2 focus:ring-purple-600 bg-gray-200 text-left active:bg-purple-300 px-8 py-3 rounded outline-none focus:outline-none mr-1 mb-4 -my-60 sm:my-0 sm:mb-1 sm:mr-1 ease-linear transition-all duration-150" type="button">
                Everyday
              </button>
              <button onClick={() => setAvailability("Weekly")} className="focus:ring-2 focus:ring-purple-600 bg-gray-200 text-left active:bg-purple-300 px-8 py-3 rounded outline-none focus:outline-none mr-1 mb-4 sm:mb-1 ease-linear transition-all duration-150" type="button">
                Once a week
              </button>
              <button onClick={() => setAvailability("Biweekly")} className="focus:ring-2 focus:ring-purple-600 bg-gray-200 text-left active:bg-purple-300 px-8 py-3 rounded outline-none focus:outline-none mr-1 mb-4 sm:mb-1 ease-linear transition-all duration-150" type="button">
                Once every 2 weeks
              </button>
              <button onClick={() => setAvailability("Monthly")} className="focus:ring-2 focus:ring-purple-600 bg-gray-200 text-left active:bg-purple-300 px-8 py-3 rounded outline-none focus:outline-none mr-1 mb-4 sm:mb-1 ease-linear transition-all duration-150" type="button">
                Once a month
              </button>
            </div>
            <button disabled={!availability} onClick={()=>setStep(9)} className="disabled:opacity-50 bg-purple-500 w-full text-white active:bg-violet-300 px-8 py-3 rounded outline-none focus:outline-none mr-1 mb-12 sm:mb-1 ease-linear transition-all duration-150" type="button">Next</button>

          </div>
        </div>
    )
}