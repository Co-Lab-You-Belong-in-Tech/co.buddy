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
      router.replace("/dashboard");
    }
  }, [user]);

  if (user)
  {
    return (
      <div className="h-screen w-screen flex justify-center items-center">
        <svg className="animate-spin h-5 w-5 mr-3">
          <path d="M10 3v2a5 5 0 0 0-3.54 8.54l-1.41 1.41A7 7 0 0 1 10 3zm4.95 2.05A7 7 0 0 1 10 17v-2a5 5 0 0 0 3.54-8.54l1.41-1.41zM10 20l-4-4 4-4v8zm0-12V0l4 4-4 4z"/>
        </svg>
      </div>
    )
  }

  if (!user)
  {
    return (
      <div className="text-gray-900 body-font h-screen">
        <div className="h-screen container mx-auto flex px-7 py-4 md:flex-row flex-col items-center justify-center">
          <div className="flex flex-col h-full justify-between items-center text-center pt-28">
            <div className="mb-12">
              <Image src={logo} width="42" height="42"></Image>
              <h1 className="text-xl">Sign in</h1>
              <p className="text-gray-500 text-sm">Welcome back</p>
            </div>
            <div className="flex flex-col w-full justify-center">
              <SignInButton></SignInButton>
            </div>
            <div className="pb-8">
              <p>Don&apos;t have an account, <Link href="/enter"><span className="text-copurple cursor-pointer">Get Started</span></Link> </p>
            </div>
          </div>
        </div>
      </div>
    )
  }

}

export function SignInButton() {
  const signInWithGoogle = async () => {
    await auth.signInWithPopup(googleAuthProvider);
  };

  return (
    <button onClick={signInWithGoogle} className="flex font-bold items-center justify-center w-full text-center border border-cogray py-2 px-6 focus:outline-none rounded text-base"><Image src={google} width="24" height="24" alt="google icon"></Image><p className="ml-5">Sign In With Google</p></button>
  );
}

export function SignOutButton() {
  return <button onClick={() => auth.signOut()} className="text-red-600 font-bold w-full text-center bg-white border-2 py-2 px-6 focus:outline-none rounded text-lg">Log out</button>;
}
