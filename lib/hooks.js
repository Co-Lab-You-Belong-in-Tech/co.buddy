import { auth, firestore } from '../lib/firebase';
import { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';

export function useUserData() {
  const [user] = useAuthState(auth)

  useEffect(() => {
    let unsubscribe;

    if (user) {
      const ref= firestore.collection('users').doc(user.uid);
      unsubscribe = ref.onSnapshot((doc) => {
        console.log("Done!");
      })
    }

    return unsubscribe;
  }, [user])

  return {user};
  
}