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

const getUnmatchedUsers = async (curUserId)  => {
  const unmatchedUsers = new Map();
  const getUsers = await firestore.collection("users")
                            .where("partner", "==", null)
                            .get()
                            .then((querySnapshot) => {
                              querySnapshot.forEach((doc) => {
                                unmatchedUsers.set(doc.id, doc.data());
                              });
                            })
  unmatchedUsers.delete(curUserId)
  return unmatchedUsers;
}

const getCurUser = async (uid) => {
  var curUser; 
  const getUser = await firestore.collection("users")
                          .doc(uid)
                          .get()
                          .then(doc => {
                            curUser = doc.data()
                          });

  return curUser;
}

const findBestUser = (curUser, unmatchedUsers) => {
  var bestUser;
  
  unmatchedUsers.forEach((user, id) => {
    if(user.role === curUser.role) {
      bestUser = {id, user};
    }
    if (user.role === curUser.role && user.availability === curUser.availability) {
      bestUser = {id, user};
    }
  });

  return bestUser;
} 

const createThread = async (curUserId, bestUserId) => {
  var threadId;
  if (curUserId < bestUserId) {
    threadId = curUserId + bestUserId;
  }
  else {
    threadId = bestUserId + curUserId;
  }

  await firestore.collection("chats")
          .doc(threadId)
          .set({
            exists: true
  })
}

const setPartners = async (curUserId, bestUserId) => {
  await firestore.collection("users").doc(curUserId).set({
    partner: bestUserId
  })

  await firestore.collection("users").doc(bestUserId).set({
    partner: curUserId
  })

} 

//TODO: import all required data and perform user matching alg here
export default async function matchUsers(req, res) {
  if (!req.body.uid) return res.status(400).send('User not found.')
  const userId = req.body.uid;
  const unmatchedUsers = await getUnmatchedUsers(userId);
  const curUser = await getCurUser(userId);

  const bestUser = findBestUser(curUser, unmatchedUsers);
  await setPartners(userId, bestUser.id)
  await createThread(userId, bestUser.id)
  res.status(200).send('OK');
}
