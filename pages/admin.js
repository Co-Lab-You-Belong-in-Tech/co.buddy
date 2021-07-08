import React from 'react'
import { useContext, useEffect, useState } from 'react'
import { AuthContext} from '../contexts/AuthContext'
import SignIn, { SignInButton, SignOutButton } from './signin'
import { useRouter } from 'next/router';
import Link from 'next/link'
import { auth, firestore } from '../lib/firebase';
import Image from 'next/image'
import foundmatch from '../public/resources/foundmatch.png'
import goal from '../public/resources/goal.svg'
import focus from '../public/resources/focus.svg'
import chat from '../public/resources/Chat.svg'
import home from '../public/resources/Home.svg'

export default function Admin() {
  const {user} = useContext(AuthContext)
  const router = useRouter();
  const [userData, setUserData] = useState();
  const [partnerName, setPartnerName] = useState();

  useEffect(() => {
    if (!user) {
      router.replace("/signin");
    }
    else {
      async function getUserInfo() {
        await firestore.collection('users')
                          .doc(auth.currentUser.uid)
                          .get()
                          .then(doc => {
                            setUserData(doc.data());
        })
      }

      getUserInfo();
    }
  }, [user]);

  useEffect(() => {
    if (!userData)
    {
      // do nothing
    }
    else if (userData.partner) {
      async function getPartnerName() {
        await firestore.collection('users')
                          .doc(userData.partner)
                          .get()
                          .then(doc => {
                            setPartnerName(doc.data().firstname);
                          })
      }
      getPartnerName();
    }
  }, [userData])
  
  if (userData && (userData.partner == null))
  {
    return (
      <div>
        {userData && (userData.partner == null) && 
          <div className="text-gray-900 body-font h-screen bg-gray-100">
          <div className="flex flex-col h-screen container mx-auto px-4 py-8 md:flex-row items-center justify-start">
            <div className="relative w-full">
              <div className="w-full">
                <h1 className="font-bold mb-7">Hi {userData.firstname}</h1>
              </div>
              <div className="flex flex-col justify-center items-center w-full px-12 mb-4 h-36 bg-coyellow rounded shadow-md">
                <Image src={foundmatch} width="72" height="72"></Image>
                <p className="font-bold text-sm">You are almost there!</p>
                <p className="text-sm text-center">We&apos;ll get you matched in no time. Keep your fingers crossed.</p>
              </div>
              <div className="flex flex-col justify-center items-center w-full mb-4 h-32 bg-white shadow-sm">
                <Image src={goal} width="20" height="20"></Image>
                <p className="text-coblue">Your Next Career Goal</p>
                <p className="text-lg font-bold">{userData.careergoal}</p>
              </div>
              <div className="flex flex-col justify-center items-center w-full mb-4 h-32 bg-white shadow-sm">
                <Image src={focus} width="20" height="20"></Image>
                <p className="text-coorange">Your Primary Focus</p>
                <p className="text-lg font-bold">Placeholder Text</p>
              </div>
                <SignOutButton></SignOutButton>
            </div>  
          </div>
          <div className="fixed bottom-0 inset-x-0 bg-white h-16 p-4">
            <div className="flex justify-between items-center h-full">
              <div className="flex flex-col justify-center items-center px-14">
                <Image src={home} width="20" height="20"></Image>
                <p className="text-xs text-copurple">Home</p>
              </div>
              <div className="flex flex-col justify-center items-center px-14">
                <Image src={chat} width="20" height="20"></Image>
                <p className="text-xs text-gray-400">Buddy Chat</p>
              </div>
            </div>
          </div>
        </div>
        }
      </div>
    )
  }
  if (!user) {
    return <SignOutButton></SignOutButton>
  }
  else {
    return (
      <div>
        {userData && (userData.partner != null) && 
          <div className="text-gray-900 body-font h-screen bg-gray-100">
            <div className="flex flex-col h-screen container mx-auto px-4 py-8 md:flex-row items-center justify-start">
              <div className="relative w-full">
                <div className="w-full">
                  <h1 className="font-bold mb-7">Hi {userData.firstname}</h1>
                </div>
                <div className="flex flex-col justify-center items-center w-full mb-4 h-36 bg-copurple-200 rounded shadow-md">
                  <Image src={foundmatch} width="72" height="72"></Image>
                  <p className="font-bold text-sm">You&apos;ve Been Matched With {partnerName}</p>
                </div>
                <div className="flex flex-col justify-center items-center w-full mb-4 h-32 bg-white shadow-sm">
                  <Image src={goal} width="20" height="20"></Image>
                  <p className="text-coblue">Your Next Career Goal</p>
                  <p className="text-lg font-bold">{userData.careergoal}</p>
                </div>
                <div className="flex flex-col justify-center items-center w-full mb-4 h-32 bg-white shadow-sm">
                  <Image src={focus} width="20" height="20"></Image>
                  <p className="text-coorange">Your Primary Focus</p>
                  <p className="text-lg font-bold">Placeholder Text</p>
                </div>
                  <SignOutButton></SignOutButton>
              </div>  
            </div>
            <div className="fixed bottom-0 inset-x-0 bg-white h-16 p-4">
              <div className="flex justify-between items-center h-full">
                <div className="flex flex-col justify-center items-center px-14">
                  <Image src={home} width="20" height="20"></Image>
                  <p className="text-xs text-copurple">Home</p>
                </div>
                <Link href="/chat">
                  <div className="flex flex-col justify-center items-center px-14">
                    <Image src={chat} width="20" height="20"></Image>
                    <p className="text-xs text-gray-400">Buddy Chat</p>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        }
      </div>)
  }
}
