import { createContext, useState, useEffect } from 'react'

const UserContext = createContext();

const UserProvider = ({children}) => {
  const [firstName, setFirstName] = useState("");
  const [role, setRole] = useState("");
  const [skillLevel, setSkillLevel] = useState("");
  const [careerGoal, setCareerGoal] = useState("");
  const [goalImportance, setGoalImportance] = useState("");
  const [availability, setAvailability] = useState("");

  return (
      <UserContext.Provider 
        value={{firstName, setFirstName, 
                role, setRole, 
                skillLevel, setSkillLevel, 
                careerGoal, setCareerGoal,
                goalImportance, setGoalImportance,
                availability, setAvailability}}>
      {children}
      </UserContext.Provider> 
  )
}

export {UserContext, UserProvider}