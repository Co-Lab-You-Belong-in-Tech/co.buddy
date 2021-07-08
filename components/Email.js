import router from 'next/router';
import React, { useContext, useEffect } from 'react'
import { StepContext } from '../contexts/StepContext'
import { AuthContext } from '../contexts/AuthContext';
import { auth, googleAuthProvider, firestore } from '../lib/firebase';
import { UserContext } from '../contexts/UserContext';
import axios from 'axios';

export default function Email () {
    const {setProgress} = useContext(StepContext)
    const {user} = useContext(AuthContext)
    const {firstName, role, skillLevel, careerGoal, goalImportance, availability} = useContext(UserContext)

    setProgress("88%");

    const updateUserData = async (firstName, role, skillLevel, careerGoal, goalImportance, availability) => {
      const userId = user.uid;
      const userDoc = firestore.doc(`users/${userId}`);
      
      const batch = firestore.batch();
      batch.set(userDoc, {firstname: firstName, role: role, skillLevel: skillLevel, careergoal: careerGoal, goalimportance: goalImportance, availability: availability, partner: null});
      
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
        updateUserData(firstName, role, skillLevel, careerGoal, goalImportance, availability);
        router.push("/dashboard");
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
