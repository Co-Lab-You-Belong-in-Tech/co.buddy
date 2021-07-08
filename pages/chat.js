import React, { useState, useContext, useEffect, useRef }from 'react'
import { AuthContext } from '../contexts/AuthContext';
import { useRouter } from 'next/router';
import { firestore, auth, fieldvalue } from '../lib/firebase';
import { useCollectionData } from 'react-firebase-hooks/firestore'

export default function Chat() {

  const dummy = useRef(); //references dummy div to scroll to bottom 
  const {user} = useContext(AuthContext);
  const router = useRouter();

  const [partner, setPartner] = useState();
  
  useEffect(() => {
    if (!user) {
      router.replace("/signin")
    }
    
    async function getPartnerId() {
      var partner;
      await firestore.collection('users')
                        .doc(auth.currentUser.uid)
                        .get()
                        .then(doc => {
                          partner = doc.data().partner;
      })
      
      setPartner(partner);
    }

    getPartnerId();
  }, [user])
  
  const curUserId = auth.currentUser.uid; 
  var threadID;

  if (curUserId < partner) {
    threadID = curUserId + partner;
  }
  else {
    threadID = partner + curUserId;
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
    <div>
      <div className="block">
        <header className="flex flex-col justify-center fixed h-24 bg-purple-500 w-full top-0">
          <h3 className="font-bold text-white text-center">You &amp; Leslie</h3>
        </header>
        <section className="min-h-screen">
          <main className="flex flex-col overflow-y-scroll my-24 p-3">
            {messages && messages.map(msg => <ChatMessage key={msg.id} message={msg} />)}
            <div ref={dummy}></div>
          </main>
          <form onSubmit={sendMessage} className="fixed flex bg-white bottom-0 w-full h-24 border-t border-gray-300">
            <div className="relative flex justify-between items-center w-full px-11">
              <input value={formValue} onChange={(e) => setFormValue(e.target.value)} placeholder="Send a message" className="h-10 border border-gray-300 rounded-full py-3 px-6"></input>
              <button type="submit" className="w-10 h-10 rounded-full text-white bg-blue-500"></button>
            </div>
          </form>
        </section>
      </div>
    </div>

  )
}

function ChatMessage(props) {
  const {text, uid} = props.message;

  if (uid === auth.currentUser.uid)
  {
    //message sent\
    return (
      <div className="flex flex-row-reverse items-center">
        <p className="bg-purple-300 rounded-full px-4 py-2 text-center my-3">{text}</p>
      </div>
    )

  }
  else {
    //message received
    return (
      <div className="flex items-center">
        <p className="bg-gray-300 rounded-full px-4 py-2 text-center my-3">{text}</p>  
      </div>
    )
  }

}