import React, { useContext } from 'react'
import Role from '../components/Role'
import SkillLevel from '../components/SkillLevel'
import { StepContext } from '../contexts/StepContext'

export default function UserSurvey() {

  const {currentStep, setStep} = useContext(StepContext);
  console.log(currentStep);

  function showStep(step) {
    switch(step) {
      case 1: 
        return <Role />
      case 2:
        return <SkillLevel />
    }
  }

  return (
    <div className="h-screen flex flex-col">
      <div className="relative pt-1">
        <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-200 m-5">
        </div>
      </div>
      {showStep(currentStep)}
    </div>
  )
}
