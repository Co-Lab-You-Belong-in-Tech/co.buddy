import React from 'react'
import { useContext, useEffect } from 'react'
import { AuthContext} from '../contexts/AuthContext'
import SignIn, { SignInButton, SignOutButton } from './signin'
import { useRouter } from 'next/router';


export default function Admin() {
  const {user} = useContext(AuthContext)
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.push("/signin");
    }
  }, [user]);
  
  return (
    <div className="text-gray-900 body-font h-screen">
      <div className="h-screen container mx-auto flex px-7 py-4 md:flex-row flex-col items-center justify-center">
        {user ? 
        <>
          <h1>Welcome User</h1>
          <SignOutButton></SignOutButton>
        </>
        :
        <SignInButton></SignInButton>
        }
      </div>
    </div>
  )
}
