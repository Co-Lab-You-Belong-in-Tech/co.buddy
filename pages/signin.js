import React from 'react'
import { auth, googleAuthProvider } from '../lib/firebase';
export default function SignIn() {
  return (
    <div className="text-gray-900 body-font h-screen">
      <div className="h-screen container mx-auto flex px-7 py-4 md:flex-row flex-col items-center justify-end">
        <div className="lg:flex-grow h-3/6 md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-center md:text-left md:mb-0 items-center text-center">
          <h1 className="text-xl font-bold mb-10">

          </h1>
          <p className="mb-32 leading-relaxed">Co.Buddy helps young professionals beat procastination and inactivity by peer accountability to achieve their goals faster.</p>
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
    <button onClick={signInWithGoogle} className="text-white w-full text-center bg-purple-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Sign In With Google</button>
  );
}