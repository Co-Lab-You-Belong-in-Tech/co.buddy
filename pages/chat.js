import React, { useState, useContext, useEffect }from 'react'
import { AuthContext } from '../contexts/AuthContext';
import { useRouter } from 'next/router';

export default function Chat() {
  const {user} = useContext(AuthContext);
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.push("/signin")
    }
  }, [user])

  const [formValue, setFormValue] = useState('');

  return (
    <div className="block">
      <header className="flex flex-col justify-center fixed h-24 bg-purple-500 w-full top-0">
        <h3 className="font-bold text-white text-center">You &amp; Leslie</h3>
      </header>
      <section className="min-h-screen">
        <main className="flex flex-col overflow-y-scroll my-24 p-3">
          <ReceivedMessage></ReceivedMessage>
          <SentMessage></SentMessage>
          <ReceivedMessage></ReceivedMessage>
          <SentMessage></SentMessage>
          <ReceivedMessage></ReceivedMessage>
          <SentMessage></SentMessage>
          <ReceivedMessage></ReceivedMessage>
          <SentMessage></SentMessage>
          <ReceivedMessage></ReceivedMessage>
          <SentMessage></SentMessage>
          <ReceivedMessage></ReceivedMessage>
          <ReceivedMessage></ReceivedMessage>
          <ReceivedMessage></ReceivedMessage>
          <ReceivedMessage></ReceivedMessage>
        </main>
        <form className="fixed flex bg-white bottom-0 w-full h-24 border-t border-gray-300">
          <div className="relative flex justify-between items-center w-full px-11">
            <input value={formValue} onChange={(e) => setFormValue(e.target.value)} placeholder="Send a message" className="h-10 border border-gray-300 rounded-full py-3 px-6"></input>
            <button type="submit" className="w-10 h-10 rounded-full text-white bg-blue-500"></button>
          </div>
        </form>
      </section>

    </div>
  )
}

export function ReceivedMessage() {
  return(
    <div className="flex items-center">
      <p className="bg-gray-300 rounded-full px-4 py-2 text-center my-3">I received the message.</p>  
    </div>
  )
}

export function SentMessage() {
  return(
    <div className="flex flex-row-reverse items-center">
      <p className="bg-purple-300 rounded-full px-4 py-2 text-center my-3">I sent the message.</p>
    </div>
  )
}