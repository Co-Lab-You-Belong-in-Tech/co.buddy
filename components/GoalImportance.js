import React, { useContext } from 'react'
import { StepContext } from '../contexts/StepContext'


export default function GoalImportance () {

    const {setStep} = useContext(StepContext)

    return (

        <div className="h-screen container mx-auto flex px-7 py-4 md:flex-row flex-col items-center justify-end">
            <div className="lg:flex-grow h-3/6 md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-center md:text-left md:mb-0 items-center text-center">
                <p className="mb-10 leading-relaxed">Why is this goal important to you?</p>
                <div className="mb-32 pt-0">
                    <input type="text" placeholder="Placeholder" className="px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"/>
                </div>
                <div className="flex w-full justify-center mb-5">
                    <button onClick={()=>setStep(7)} className="text-white w-full text-center bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Next</button>
                </div>
            </div>
        </div>

    )

}