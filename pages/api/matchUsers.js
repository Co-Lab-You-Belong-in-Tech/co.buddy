import { NextApiRequest, NextApiResponse } from 'next';
import firebase from 'firebase/app'
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyBJCWoY3VWwWOBvs2nCj7Pl8xgjrtZtI-E",
  authDomain: "cobuddy-d5ce6.firebaseapp.com",
  projectId: "cobuddy-d5ce6",
  storageBucket: "cobuddy-d5ce6.appspot.com",
  messagingSenderId: "43579658147",
  appId: "1:43579658147:web:96877ce7a3b875a0049416",
  measurementId: "G-DWWG4KHMS8"
};
  
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig)
}

const auth = firebase.auth();
const firestore = firebase.firestore();

export default async function matchUsers(req, res) {
  const users = await firestore.collection('users').get();
  console.log(users.docs.map(doc => doc.data()));

}
