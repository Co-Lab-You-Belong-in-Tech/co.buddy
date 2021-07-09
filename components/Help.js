import React, { useContext } from 'react'
import { StepContext } from '../contexts/StepContext'
import CareerGoal from './CareerGoal'
import { UserContext } from '../contexts/UserContext'

export default function Help () {
    const {setProgress} = useContext(StepContext)
    setProgress("55%");
    const {role}  = useContext(UserContext)
    function showRole(role) {
        switch(role) {
          case "designer": 
            return <DesignerHelp />
          case "pm":
            return <PMHelp />
          case "dev":
            return <DevHelp />
          case "otherrole":
            return <CareerGoal />
        }
      }
    
      return (
        <div className="h-screen flex flex-col">
          {showRole(role)}
        </div>
      )
    
    
    function DevHelp () {
        const {setStep} = useContext(StepContext)
        const {help, setHelp} = useContext(UserContext)
        return (
            <div className="flex-1">
                <button onClick={()=>setStep(4)} className="ml-5 mt-5 sm:invisible">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3.828 6.99968H16V8.99968H3.828L9.192 14.3637L7.778 15.7777L0 7.99968L7.778 0.22168L9.192 1.63568L3.828 6.99968Z" fill="#525252"/>
                    </svg>
                </button>
                <div className="flex flex-col justify-between p-10 h-full">
                    <h1 className="font-bold text-center">What do you need help with?</h1>
                    <div className="flex flex-col justify-between h-0 sm:h-3/6" >
                        <button onClick={() => setHelp("Algorithms and Data Structures")} className="focus:ring-2 focus:ring-purple-600 bg-gray-200 text-left active:bg-purple-300 px-8 py-3 rounded outline-none focus:outline-none mr-1 mb-4 -my-60 sm:-my-10 sm:mb-5 sm:mr-1 ease-linear transition-all duration-150" type="button">
                         Learn Algorithms/Data Structures
                        </button>
                        <button onClick={() => setHelp("Interview Questions")} className="focus:ring-2 focus:ring-purple-600 bg-gray-200 text-left active:bg-purple-300 px-8 py-3 rounded outline-none focus:outline-none mr-1 mb-4 sm:mb-5 ease-linear transition-all duration-150" type="button">
                         Master Interview Questions
                        </button>
                        <button onClick={() => setHelp("Language/framework")} className="focus:ring-2 focus:ring-purple-600 bg-gray-200 text-left active:bg-purple-300 px-8 py-3 rounded outline-none focus:outline-none mr-1 mb-4 sm:mb-5 ease-linear transition-all duration-150" type="button">
                         Learn a language/framework
                        </button>
                        <button onClick={() => setHelp("Time Management")} className="focus:ring-2 focus:ring-purple-600 bg-gray-200 text-left active:bg-purple-300 px-8 py-3 rounded outline-none focus:outline-none mr-1 mb-4 sm:mb-5 ease-linear transition-all duration-150" type="button">
                         Time Management
                        </button>
                        <button onClick={() => setHelp("Other")} className="focus:ring-2 focus:ring-purple-600 bg-gray-200 text-left active:bg-purple-300 px-8 py-3 rounded outline-none focus:outline-none mr-1 mb-4 sm:mb-5 ease-linear transition-all duration-150" type="button">
                         Other
                        </button>
                    </div>
                    <button disabled={!help} onClick={()=>setStep(6)} className="bg-purple-500 text-white active:bg-purple-300 px-8 py-3 rounded outline-none focus:outline-none mr-1 mb-12 sm:mb-1 ease-linear transition-all duration-150" type="button">
                     Next
                    </button>
                </div>
            </div>
        )
    }

    function DesignerHelp () {
        const {setStep} = useContext(StepContext)
        return (
            <div className="flex-1">
                <button onClick={()=>setStep(4)} className="ml-5 mt-5 sm:invisible">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3.828 6.99968H16V8.99968H3.828L9.192 14.3637L7.778 15.7777L0 7.99968L7.778 0.22168L9.192 1.63568L3.828 6.99968Z" fill="#525252"/>
                    </svg>
                </button>
                <div className="flex flex-col justify-between p-10 h-full">
                    <h1 className="font-bold text-center">What do you need help with?</h1>
                    <div className="flex flex-col justify-between h-0 sm:h-3/6" >
                        <button className="focus:ring-2 focus:ring-purple-600 bg-gray-200 text-left active:bg-purple-300 px-8 py-3 rounded outline-none focus:outline-none mr-1 mb-4 -my-60 sm:-my-10 sm:mb-5 sm:mr-1 ease-linear transition-all duration-150" type="button">
                        Design Tools
                        </button>
                        <button className="focus:ring-2 focus:ring-purple-600 bg-gray-200 text-left active:bg-purple-300 px-8 py-3 rounded outline-none focus:outline-none mr-1 mb-4 sm:mb-5 ease-linear transition-all duration-150" type="button">
                        UX Research
                        </button>
                        <button className="focus:ring-2 focus:ring-purple-600 bg-gray-200 text-left active:bg-purple-300 px-8 py-3 rounded outline-none focus:outline-none mr-1 mb-4 sm:mb-5 ease-linear transition-all duration-150" type="button">
                        Portfolio/Interview Preparation
                        </button>
                        <button className="focus:ring-2 focus:ring-purple-600 bg-gray-200 text-left active:bg-purple-300 px-8 py-3 rounded outline-none focus:outline-none mr-1 mb-4 sm:mb-5 ease-linear transition-all duration-150" type="button">
                        Time Management
                        </button>
                        <button className="focus:ring-2 focus:ring-purple-600 bg-gray-200 text-left active:bg-purple-300 px-8 py-3 rounded outline-none focus:outline-none mr-1 mb-4 sm:mb-5 ease-linear transition-all duration-150" type="button">
                        Other
                        </button>
                    </div>
                    <button onClick={()=>setStep(6)} className="bg-purple-500 text-white active:bg-purple-300 px-8 py-3 rounded outline-none focus:outline-none mr-1 mb-12 sm:mb-1 ease-linear transition-all duration-150" type="button">
                    Next
                    </button>
                </div>
            </div>
        )
    }


    function PMHelp () {
        const {setStep} = useContext(StepContext)
        return (
            <div className="flex-1">
                <button onClick={()=>setStep(4)} className="ml-5 mt-5 sm:invisible">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3.828 6.99968H16V8.99968H3.828L9.192 14.3637L7.778 15.7777L0 7.99968L7.778 0.22168L9.192 1.63568L3.828 6.99968Z" fill="#525252"/>
                    </svg>
                </button>
                <div className="flex flex-col justify-between p-10 h-full">
                    <h1 className="font-bold text-center">What do you need help with?</h1>
                    <div className="flex flex-col justify-between h-0 sm:h-3/6" >
                        <button className="focus:ring-2 focus:ring-purple-600 bg-gray-200 text-left active:bg-purple-300 px-8 py-3 rounded outline-none focus:outline-none mr-1 mb-4 -my-60 sm:-my-20 sm:mb-5 sm:mr-1 ease-linear transition-all duration-150" type="button">
                         Product Interview Strategy
                        </button>
                        <button className="focus:ring-2 focus:ring-purple-600 bg-gray-200 text-left active:bg-purple-300 px-8 py-3 rounded outline-none focus:outline-none mr-1 mb-4 sm:mb-5 ease-linear transition-all duration-150" type="button">
                         Job Search
                        </button>
                        <button className="focus:ring-2 focus:ring-purple-600 bg-gray-200 text-left active:bg-purple-300 px-8 py-3 rounded outline-none focus:outline-none mr-1 mb-4 sm:mb-5 ease-linear transition-all duration-150" type="button">
                         Writing Product Requirements
                        </button>
                        <button className="focus:ring-2 focus:ring-purple-600 bg-gray-200 text-left active:bg-purple-300 px-8 py-3 rounded outline-none focus:outline-none mr-1 mb-4 sm:mb-5 ease-linear transition-all duration-150" type="button">
                            Building a Product Roadmap
                        </button>
                        <button className="focus:ring-2 focus:ring-purple-600 bg-gray-200 text-left active:bg-purple-300 px-8 py-3 rounded outline-none focus:outline-none mr-1 mb-4 sm:mb-5 ease-linear transition-all duration-150" type="button">
                         Research
                        </button>
                        <button className="focus:ring-2 focus:ring-purple-600 bg-gray-200 text-left active:bg-purple-300 px-8 py-3 rounded outline-none focus:outline-none mr-1 mb-4 sm:mb-5 ease-linear transition-all duration-150" type="button">
                         Other
                        </button>
                    </div>
                    <button onClick={()=>setStep(6)} className="bg-purple-500 text-white active:bg-purple-300 px-8 py-3 rounded outline-none focus:outline-none mr-1 mb-12 sm:mb-1 ease-linear transition-all duration-150" type="button">
                     Next
                    </button>
                </div>
            </div>
        )
    }

}

