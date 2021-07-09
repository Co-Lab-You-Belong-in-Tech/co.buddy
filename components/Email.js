import router from 'next/router';
import React, { useContext, useEffect } from 'react'
import { StepContext } from '../contexts/StepContext'
import { AuthContext } from '../contexts/AuthContext';
import { auth, googleAuthProvider, firestore } from '../lib/firebase';
import { UserContext } from '../contexts/UserContext';
import axios from 'axios';

export default function Email () {
    const {setStep,setProgress} = useContext(StepContext)
    const {user} = useContext(AuthContext)
    const {firstName, role, skillLevel, careerGoal, goalImportance, availability, help} = useContext(UserContext)

    setProgress("88%");

    const updateUserData = async (firstName, role, skillLevel, careerGoal, goalImportance, availability, help) => {
      const userId = user.uid;
      const userDoc = firestore.doc(`users/${userId}`);
      
      const batch = firestore.batch();
      batch.set(userDoc, {firstname: firstName, role: role, skillLevel: skillLevel, careergoal: careerGoal, goalimportance: goalImportance, availability: availability, partner: null, help: help});
      
      await batch.commit();

      //this is where we send the post request to the server to match the current user
      await axios
              .post('/api/matchUsers', user)
              .then(response => {
                console.log(response);
      })
    }
    
    useEffect(() => {
      //TODO: if user logged in and hasn't filled in entry form
      if(user) {
        updateUserData(firstName, role, skillLevel, careerGoal, goalImportance, availability, help);
        router.push("/dashboard");
      }

    }, [user])


    return(
      <div className="flex-1">
        <button onClick={()=>setStep(8)} className="ml-5 mt-5 sm:invisible">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3.828 6.99968H16V8.99968H3.828L9.192 14.3637L7.778 15.7777L0 7.99968L7.778 0.22168L9.192 1.63568L3.828 6.99968Z" fill="#525252"/>
            </svg>
        </button>
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
    <button onClick={signInWithGoogle} className="text-white w-full text-center bg-purple-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded mb-5 sm:mb-1 text-lg">Sign Up With Google</button>
  );
}
