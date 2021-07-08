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
          case "Designer": 
            return <DesignerHelp />
          case "Product Manager":
            return <PMHelp />
          case "Developer":
            return <DevHelp />
          case "Other Role":
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
        const {setHelp} = useContext(UserContext)
        return (
            <div className="flex-1">
                <div className="flex flex-col justify-between p-10 h-full">
                    <h1 className="font-bold text-center">What&apos; do you need help with?</h1>
                    <div className="flex flex-col justify-between h-3/6" >
                        <button onClick={() => {setHelp("Learn Algorithms/Data Structures")}}className="focus:ring-2 focus:ring-purple-600 bg-gray-200 text-left active:bg-purple-300 px-8 py-3 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">
                         Learn Algorithms/Data Structures
                        </button>
                        <button onClick={() => {setHelp("Master Interview Questions")}}className="focus:ring-2 focus:ring-purple-600 bg-gray-200 text-left active:bg-purple-300 px-8 py-3 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">
                         Master Interview Questions
                        </button>
                        <button onClick={() => {setHelp("Learn a language/framework")}}className="focus:ring-2 focus:ring-purple-600 bg-gray-200 text-left active:bg-purple-300 px-8 py-3 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">
                         Learn a language/framework
                        </button>
                        <button onClick={() => {setHelp("Time Management")}}className="focus:ring-2 focus:ring-purple-600 bg-gray-200 text-left active:bg-purple-300 px-8 py-3 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">
                         Time Management
                        </button>
                        <button onClick={() => {setHelp("Other")}}className="focus:ring-2 focus:ring-purple-600 bg-gray-200 text-left active:bg-purple-300 px-8 py-3 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">
                         Other
                        </button>
                    </div>
                    <button onClick={()=>setStep(6)} className="bg-purple-500 text-white active:bg-purple-300 px-8 py-3 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">
                     Next
                    </button>
                </div>
            </div>
        )
    }

    function DesignerHelp () {
        const {setStep} = useContext(StepContext)  
        const {setHelp} = useContext(UserContext)
        return (
            <div className="flex-1">
                <div className="flex flex-col justify-between p-10 h-full">
                    <h1 className="font-bold text-center">What&apos; do you need help with?</h1>
                    <div className="flex flex-col justify-between h-3/6" >
                        <button onClick={() => {setHelp("Design Tools")}}className="focus:ring-2 focus:ring-purple-600 bg-gray-200 text-left active:bg-purple-300 px-8 py-3 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">
                        Design Tools
                        </button>
                        <button onClick={() => {setHelp("UX Research")}}className="focus:ring-2 focus:ring-purple-600 bg-gray-200 text-left active:bg-purple-300 px-8 py-3 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">
                        UX Research
                        </button>
                        <button onClick={() => {setHelp("Portfolio/Interview Preparation")}}className="focus:ring-2 focus:ring-purple-600 bg-gray-200 text-left active:bg-purple-300 px-8 py-3 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">
                        Portfolio/Interview Preparation
                        </button>
                        <button onClick={() => {setHelp("Time Management")}}className="focus:ring-2 focus:ring-purple-600 bg-gray-200 text-left active:bg-purple-300 px-8 py-3 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">
                        Time Management
                        </button>
                        <button onClick={() => {setHelp("Other")}}className="focus:ring-2 focus:ring-purple-600 bg-gray-200 text-left active:bg-purple-300 px-8 py-3 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">
                        Other
                        </button>
                    </div>
                    <button onClick={()=>setStep(6)} className="bg-purple-500 text-white active:bg-purple-300 px-8 py-3 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">
                    Next
                    </button>
                </div>
            </div>
        )
    }


    function PMHelp () {
        const {setStep} = useContext(StepContext) 
        const {setHelp} = useContext(UserContext)
        return (
            <div className="flex-1">
                <div className="flex flex-col justify-between p-10 h-full">
                    <h1 className="font-bold text-center">What&apos; do you need help with?</h1>
                    <div className="flex flex-col justify-between h-3/6" >
                        <button onClick={() => setHelp("Product Interview Strategy")}className="focus:ring-2 focus:ring-purple-600 bg-gray-200 text-left active:bg-purple-300 px-8 py-3 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">
                         Product Interview Strategy
                        </button>
                        <button onClick={() => setHelp("Job Search")}className="focus:ring-2 focus:ring-purple-600 bg-gray-200 text-left active:bg-purple-300 px-8 py-3 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">
                         Job Search
                        </button>
                        <button onClick={() => setHelp("Writing Product Requirements")}className="focus:ring-2 focus:ring-purple-600 bg-gray-200 text-left active:bg-purple-300 px-8 py-3 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">
                         Writing Product Requirements
                        </button>
                        <button onClick={() => setHelp("Building a Product Roadmap")}className="focus:ring-2 focus:ring-purple-600 bg-gray-200 text-left active:bg-purple-300 px-8 py-3 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">
                          Building a Product Roadmap
                        </button>
                        <button onClick={() => setHelp("Research")}className="focus:ring-2 focus:ring-purple-600 bg-gray-200 text-left active:bg-purple-300 px-8 py-3 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">
                         Research
                        </button>
                        <button onClick={() => setHelp("Other")}className="focus:ring-2 focus:ring-purple-600 bg-gray-200 text-left active:bg-purple-300 px-8 py-3 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">
                         Other
                        </button>
                    </div>
                    <button onClick={()=>setStep(6)} className="bg-purple-500 text-white active:bg-purple-300 px-8 py-3 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">
                     Next
                    </button>
                </div>
            </div>
        )
    }

}

