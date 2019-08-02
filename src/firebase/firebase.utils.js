import firebase from "firebase/app";
import "firebase/firestore"; //database
import "firebase/auth"; // authentication

//we pull firesstore and firebase from firebase app because its the only two we need for this app

const config = {
  apiKey: "AIzaSyCqV8k1WdZ6otDjttNcypjz1UcJu1Oubdc",
  authDomain: "crwn-db-bbd65.firebaseapp.com",
  databaseURL: "https://crwn-db-bbd65.firebaseio.com",
  projectId: "crwn-db-bbd65",
  storageBucket: "",
  messagingSenderId: "80054283749",
  appId: "1:80054283749:web:230f973b73c56b23"
};

// we are making a async request;
//because we are fetching for the userAuth data being passe din
//userAuth is what we get from the library
//addtionalData is other stuff like sign up
// userAuth and additonal  will both be passed in as an object
export const createUserProfileDocument = async (userAuth, addtionalData) => {
  //if is not false we want to return nothing
  //userAuth will be orginally passed in null but the ! will be reversed to true
  if (!userAuth) return;

  //a query is normally asking for a document or collection.
  //firestore will usaully return a refrence or snapshap object afterward.
  //with refrence query we can request a specific location of a doc or collecition.
  //in this case we are making a doc request
  //the docref does not have the actual data
  const userRef = firestore.doc(`users/${userAuth.uid}`);

  //.get allows us to pull out a snapshot object and get the actual user data.
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;

    const createdAt = new Date();

    try {
      //create the user to be stored in database if the user doesnt exist
      //make a request to database via set.
      //we do by userRef; which is a document refrence object
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...addtionalData
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  return userRef;
};

//Intialize Fire Base inside of App for use
//Be sure to pass in the config object
firebase.initializeApp(config);

//Set up google sign up services
export const auth = firebase.auth();
export const firestore = firebase.firestore();

//Set up google authentication.
// the provide variable stores the GoogleAuthProvider class from auth llibrary.
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" }); //triggers google pop up
export const signInWithGoogle = () => auth.signInWithPopup(provider); // this assures we get the google pop only by passing it through

export default firebase;
