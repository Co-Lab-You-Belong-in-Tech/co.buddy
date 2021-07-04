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

const getUnmatchedUsers = () => {
  //TODO: get unmatched users only
  const unmatchedUsers = firestore.collection("users").where("partner", "==", null).get();
}

//TODO: import all required data and perform user matching alg here
export default async function matchUsers(req, res) {
  if (!req.body.uid) return res.status(400).send('User not found.')

  const userId = req.body.uid;
  const unmatchedUsers = getUnmatchedUsers();
  console.log(unmatchedUsers);
  res.status(200).send('OK');
  
}
