import React, { useEffect, useContext, useState, useRef} from 'react'
import { auth, fieldvalue } from '../lib/firebase'
import { useAuthState } from 'react-firebase-hooks/auth' 
import { useCollectionData } from 'react-firebase-hooks/firestore'
import { useRouter } from 'next/router'
import { firestore } from '../lib/firebase'
import { UserContext } from '../contexts/UserContext'
import Link from 'next/link'
import SignIn, { SignInButton, SignOutButton } from './signin'
import moment from 'moment'

import Image from 'next/image'
import chat from '../public/resources/Chat.svg'
import chatactive from '../public/resources/ChatActive.svg'
import home from '../public/resources/Home.svg'
import foundmatch from '../public/resources/foundmatch.png'
import goal from '../public/resources/goal.svg'
import focus from '../public/resources/focus.svg'
import homenotactive from '../public/resources/HomeNotActive.svg'
import logo from '../public/resources/logo.png'
import send from '../public/resources/send.svg'

export default function Dashboard() {
  const {firstName, setFirstName, role, setRole, skillLevel, setSkillLevel, careerGoal, setCareerGoal, goalImportance, setGoalImportance, availability, setAvailability, partner, setPartner, help, setHelp} = useContext(UserContext)
  const [user] = useAuthState(auth)
  const router = useRouter();
  const [partnerInfo, setPartnerInfo] = useState("");
  const [openChat, setOpenChat] = useState(false);

  //GRABS USER INFORMATION AND STORES IN CONTEXT
  useEffect(() => {
    if (!user) {
      // router.replace("/signin");
    }
    else {
      async function getUserInfo() {
        await firestore.collection('users')
                          .doc(auth.currentUser.uid)
                          .onSnapshot((doc) => {
                            setFirstName(doc.data().firstname);
                            setRole(doc.data().role)
                            setSkillLevel(doc.data().skilllevel)
                            setCareerGoal(doc.data().careergoal)
                            setGoalImportance(doc.data().goalimportance)
                            setAvailability(doc.data().availability)
                            setPartner(doc.data().partner)
                            setHelp(doc.data().help)
        })
      }

      getUserInfo();
    }
  }, [user]); 

  //GRABS USERS PARTNER INFO AND STORES IN STATE
  useEffect(() => {
    if (partner) {
      async function getPartnerInfo() {
        await firestore.collection('users')
                          .doc(partner)
                          .get()
                          .then(doc => {
                            setPartnerInfo(doc.data())
                          })
      }
  
      getPartnerInfo();
    }
  }, [partner])
  
  useEffect(() => {
    console.log("Open chat clicked.")
  }, [openChat])

  //unsure if user is logged in 
  if (!user) {
    return (
      <div>
        Loading...
      </div>
    )
  }

  //logged in user but no match
  if (user && !partner) {
    return (
      <div>
        {user && !partner && 
          <div className="text-gray-900 body-font h-screen bg-gray-100">
            <div className="flex flex-col h-screen container mx-auto px-4 py-8 md:flex-row items-center justify-start">
              <div className="hidden lg:flex justify-center items-center fixed top-0 left-0 right-0 w-full h-20 border-b bg-white">
                <Image src={logo} width="40" height="40"></Image>
                <Link href="/dashboard"><h3 className="cursor-pointer text-xl font-extrabold pl-3">Co.Buddy</h3></Link>
              </div>
              <div className="relative w-full lg:w-large mx-auto">
                <div className="w-full">
                  <h1 className="font-bold mb-7 lg:text-center">Hi {firstName}</h1>
                </div>
                <div className="flex flex-col justify-center items-center w-full px-12 mb-4 h-36 bg-coyellow rounded shadow-md">
                  <Image src={foundmatch} width="72" height="72"></Image>
                  <p className="font-bold text-sm">You are almost there!</p>
                  <p className="text-sm text-center">We&apos;ll get you matched in no time. Keep your fingers crossed.</p>
                </div>
                <div className="flex flex-col justify-center items-center w-full mb-4 h-32 bg-white shadow-sm">
                  <Image src={goal} width="20" height="20"></Image>
                  <p className="text-coblue">Your Next Career Goal</p>
                  <p className="text-lg font-bold">{careerGoal}</p>
                </div>
                <div className="flex flex-col justify-center items-center w-full mb-4 h-32 bg-white shadow-sm">
                  <Image src={focus} width="20" height="20"></Image>
                  <p className="text-coorange">Your Primary Focus</p>
                  <p className="text-lg font-bold">{help}</p>
                </div>
                  <SignOutButton></SignOutButton>
            </div>  
          </div>
          <div className="fixed bottom-0 inset-x-0 bg-white lg:h-20 h-16 p-4 border-t border-gray-300">
            <div className="flex justify-between items-center h-full mx-auto lg:w-large">
              <div className="flex flex-col justify-center items-center px-14" onClick={() => setOpenChat(false)}>
                <Image src={home} width="20" height="20"></Image>
                <p className="text-xs text-copurple">Home</p>
              </div>
              <div className="flex flex-col justify-center items-center px-14 opacity-60" onClick={() => setOpenChat(false)}>
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

  //logged in user on dashboard panel
  if (user && partner) {
    return (
      <div>
        {user && partner && !openChat &&
          <div className="text-gray-900 body-font h-screen bg-gray-100">
            <div className="hidden lg:flex justify-center items-center fixed top-0 left-0 right-0 w-full h-20 border-b bg-white">
              <Image src={logo} width="40" height="40"></Image>
              <Link href="/dashboard"><h3 className="cursor-pointer text-xl font-extrabold pl-3">Co.Buddy</h3></Link>
            </div>
            <div className="flex flex-col flex-l overflow-y-scroll container mx-auto px-4 py-8 md:flex-row items-center justify-start">
              <div className="relative w-full lg:w-large mx-auto">
                <div className="w-full">
                  <h1 className="font-bold mb-7 lg:text-center">Hi {firstName}</h1>
                </div>
                <div className="flex flex-col justify-center items-center w-full mb-4 h-36 bg-copurple-200 rounded shadow-md">
                  <Image src={foundmatch} width="72" height="72"></Image>
                  <p className="font-bold text-sm">You&apos;ve Been Matched With {partnerInfo.firstname}</p>
                </div>
                <div className="flex flex-col justify-center items-center w-full mb-4 h-32 bg-white shadow-sm">
                  <Image src={goal} width="20" height="20"></Image>
                  <p className="text-coblue">Your Next Career Goal</p>
                  <p className="text-lg font-bold">{careerGoal}</p>
                </div>
                <div className="flex flex-col justify-center items-center w-full mb-4 h-32 bg-white shadow-sm">
                  <Image src={focus} width="20" height="20"></Image>
                  <p className="text-coorange">Your Primary Focus</p>
                  <p className="text-lg font-bold">{help}</p>
                </div>
                  <SignOutButton></SignOutButton>
              </div>  
            </div>
            <div className="fixed bottom-0 inset-x-0 bg-white lg:h-20 h-16 p-4 border-t border-gray-300">
              <div className="flex justify-between items-center h-full mx-auto lg:w-large">
                <div className="flex flex-col justify-center items-center px-14" onClick={() => setOpenChat(false)}>
                  <Image src={home} width="20" height="20"></Image>
                  <p className="text-xs text-copurple">Home</p>
                </div>
                <div className="flex flex-col justify-center items-center px-14" onClick={() => setOpenChat(true)} >
                  <Image src={chat} width="20" height="20"></Image>
                  <p className="text-xs text-gray-400">Buddy Chat</p>
                </div>
              </div>
            </div>
          </div>
        }
        {user && partner && openChat &&
          <BuddyChat curUserId={auth.currentUser.uid} partnerId={partner} partnerInfo={partnerInfo} setOpenChat={setOpenChat}></BuddyChat>
        }
      </div>)
  }

}

function BuddyChat({curUserId, partnerId, partnerInfo, setOpenChat}) {
  var threadID;
  const dummy = useRef(); //references dummy div to scroll to bottom 

  if (curUserId < partnerId) {
    threadID = curUserId + partnerId;
  }
  else {
    threadID = partnerId + curUserId;
  }

  const messagesRef = firestore.collection('chats').doc(threadID).collection('messages')
  const query = messagesRef.orderBy('createdAt').limit(25);

  const [messages] = useCollectionData(query, {idField: 'id'});
  const [formValue, setFormValue] = useState('');

  const sendMessage = async(e) => {
    e.preventDefault();

    const { uid } = auth.currentUser;

    await messagesRef.add({
      text: formValue,
      createdAt: fieldvalue.serverTimestamp(),
      uid
    })

    setFormValue('');
    dummy.current.scrollIntoView({behavior: 'smooth'});

  }

  return (
      <div className="">
        <header className="flex flex-col justify-center fixed h-24 bg-copurple w-full top-0">
          <h3 className="font-bold text-white text-center">You &amp; {partnerInfo.firstname}</h3>
        </header>
        <section className="flex-1">
          <main className="flex flex-col overflow-y-scroll mt-24 mb-32 p-3">
            {messages && messages.map(msg => <ChatMessage key={msg.id} message={msg} timestamp={msg.createdAt} />)}
            <div ref={dummy}></div>
          </main>
        <form onSubmit={sendMessage} className="fixed flex bg-white bottom-0 w-full h-14 mb-16 border-t border-gray-300">
          <div className="relative flex justify-between items-center w-full px-2">
            <input value={formValue} onChange={(e) => setFormValue(e.target.value)} placeholder="Send a message" className="h-10 border w-full border-gray-300 rounded-full py-3 px-6"></input>
            <button type="submit" className="flex justify-center pl-2"><Image src={send}></Image></button>
          </div>
        </form>
        <div className="fixed bottom-0 inset-x-0 bg-white h-16 p-4">
          <div className="flex justify-between items-center h-full">
            <div className="flex flex-col justify-center items-center px-14">
              <Image alt="home" src={homenotactive} width="20" height="20" onClick={() => setOpenChat(false)}></Image>
              <p className="text-xs text-gray-400">Home</p>
            </div>
            <div className="flex flex-col justify-center items-center px-14">
              <Image alt="chat" src={chatactive} width="20" height="20" onClick={() => setOpenChat(true)}></Image>
              <p className="text-xs text-copurple">Buddy Chat</p>
            </div>
          </div>
        </div>
      </section>
    </div>
    )
}

function ChatMessage(props) {
  const {text, uid, createdAt} = props.message;
  const moment = require('moment');
  var timestamp = "a few seconds ago"
  if (createdAt) {
    timestamp = moment(createdAt.toDate()).fromNow();
  }
  if (uid === auth.currentUser.uid)
  {
    //message sent\
    return (
      <>
        <div className="flex flex-row-reverse items-center">
          <p className="bg-copurple rounded-t-lg rounded-l-lg px-4 py-2 text-left mt-3 mb-1 text-white max-w-">{text}</p>
        </div>
        <div className="flex flex-row-reverse items-center">
          <p className="text-xs text-gray-300">{timestamp}</p>
        </div>

      </>
    )

  }
  else {
    //message received
    return (
      <>
        <div className="flex items-center">
          <p className="bg-gray-200 rounded-t-lg rounded-r-lg px-4 py-2 text-left mt-3 mb-1 max-w-xs">{text}</p>  
        </div>
        <div className="flex items-center">
          <p className="text-xs text-gray-300">{timestamp}</p>
        </div>
      </>
    )
  }

}