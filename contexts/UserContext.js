import { createContext, useState } from 'react'

const UserContext = createContext();

const UserProvider = ({children}) => {
  const [firstName, setFirstName] = useState("");
  const [role, setRole] = useState("");
  const [skillLevel, setSkillLevel] = useState("");
  const [careerGoal, setCareerGoal] = useState("");
  const [goalImportance, setGoalImportance] = useState("");
  const [availability, setAvailability] = useState("");
  const [location, setLocation] = useState("");
  return (
      <UserContext.Provider 
        value={{firstName, setFirstName, 
                role, setRole, 
                skillLevel, setSkillLevel, 
                careerGoal, setCareerGoal,
                goalImportance, setGoalImportance,
                availability, setAvailability,
                location, setLocation}}>
      {children}
      </UserContext.Provider> 
  )
}

export {UserContext, UserProvider}