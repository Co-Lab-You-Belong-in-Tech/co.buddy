import React from 'react'
import { auth, googleAuthProvider } from '../lib/firebase';
import { useContext } from 'react'
import { AuthContext} from '../contexts/AuthContext'
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link'
import Image from 'next/image'

import google from '../public/resources/Google.png'
import logo from '../public/resources/logo.png'

export default function SignIn() {
  const {user} = useContext(AuthContext);
  const router = useRouter();
  
  useEffect(() => {
    if (user) {
      router.push("/admin");
    }
  }, [user]);

  return (
    <div className="text-gray-900 body-font h-screen">
      <div className="h-screen container mx-auto flex px-7 py-4 md:flex-row flex-col items-center justify-end">
        <div className="lg:flex-grow w-full h-3/6 md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-center md:text-left md:mb-0 items-center text-center">
          <Image src={logo} width="50" height="50"></Image>
          <div className="flex w-full justify-center mb-5">
              <SignInButton></SignInButton>
          </div>
        </div>
      </div>
    </div>
  )
}

export function SignInButton() {
  const signInWithGoogle = async () => {
    await auth.signInWithPopup(googleAuthProvider);
  };

  return (
    <button onClick={signInWithGoogle} className="flex items-center justify-center w-full text-center border border-cogray py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"><Image src={google} width="24" height="24" alt="google icon"></Image><p className="ml-5">Sign In With Google</p></button>
  );
}

export function SignOutButton() {
  return <button onClick={() => auth.signOut()} className="text-white w-full text-center bg-purple-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Sign Out</button>;
}
