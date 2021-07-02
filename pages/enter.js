import React, { useContext, useEffect } from 'react'
import Role from '../components/Role'
import SkillLevel from '../components/SkillLevel'
import Name from '../components/Name'
import Greetings from '../components/Greetings'
import CareerGoal from '../components/CareerGoal'
import GoalImportance from '../components/GoalImportance'
import Availability from '../components/Availability'
import Location from '../components/Location'
import Email from '../components/Email'
import Password from '../components/Password'
import DevHelp from '../components/DevHelp';
import DesignerHelp from '../components/DesignerHelp';
import PMHelp from '../components/PMHelp';
import { StepContext } from '../contexts/StepContext'
import { AuthContext } from '../contexts/AuthContext'
import { UserContext } from '../contexts/UserContext'
import { useRouter } from 'next/router'

export default function Enter() {

  const {user} = useContext(AuthContext);
  const router = useRouter();

  const {currentStep, setStep} = useContext(StepContext);


  useEffect(() => {
    if (user) {
      router.push("/admin");
    }
  }, [user]);

  function showStep(step) {
    switch(step) {
      case 1: 
        return <Name />
      case 2:
        return <Greetings />
      case 3:
        return <Role />
      case 4:
        return <SkillLevel />
      case 5:
        return <CareerGoal />
      case 6:
        return <GoalImportance />
      case 7:
        return <Availability />
      case 8:
        return <Email />
      case "designer": 
        return <DesignerHelp />
      case "pm":
        return <PMHelp />
      case "dev":
        return <DevHelp />
      case "otherrole":
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
