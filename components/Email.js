import router from 'next/router';
import React, { useContext, useEffect } from 'react'
import { StepContext } from '../contexts/StepContext'
import { AuthContext } from '../contexts/AuthContext';
import { auth, googleAuthProvider, firestore } from '../lib/firebase';
import { UserContext } from '../contexts/UserContext';

export default function Email () {
    const {setStep} = useContext(StepContext)
    const {user} = useContext(AuthContext)
    const {firstName, role, skillLevel, careerGoal, goalImportance, availability} = useContext(UserContext)

    const updateUserData = async (firstName, role, skillLevel, careerGoal, goalImportance, availability) => {
      const userDoc = firestore.doc(`users/${user.uid}`);
    
      const batch = firestore.batch();
      batch.set(userDoc, {firstname: firstName, role: role, skillLevel: skillLevel, careergoal: careerGoal, goalimportance: goalImportance, availability: availability, partner: null});
    
      await batch.commit();
    }
    
    useEffect(() => {
      if(user) {
        updateUserData(firstName, role, skillLevel, careerGoal, goalImportance, availability);
        router.push("/admin");
      }

    }, [user])


    return(
      <div className="flex-1">
        <div className="flex flex-col justify-between p-10 h-full">
          <h1 className="font-bold text-center">Sign Up With Google</h1>
          <div>
            <SignUpButton></SignUpButton>
          </div>
        </div>
      </div>
    )
}

export function SignUpButton() {
  const signInWithGoogle = async () => {
    await auth.signInWithPopup(googleAuthProvider);
  };

  return (
    <button onClick={signInWithGoogle} className="text-white w-full text-center bg-purple-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Sign Up With Google</button>
  );
}
