import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config =
    {
        apiKey: "AIzaSyCHIKNjuE750AZvhF1sVyG_fgZnYguofJU",
        authDomain: "crwn-db-642d5.firebaseapp.com",
        databaseURL: "https://crwn-db-642d5.firebaseio.com",
        projectId: "crwn-db-642d5",
        storageBucket: "crwn-db-642d5.appspot.com",
        messagingSenderId: "667060170445",
        appId: "1:667060170445:web:0a5852663ec2f87af8c384",
        measurementId: "G-RH3DLQ4VRX"
      };

      export const createUserProfileDocument = async (userAuth, additionalData) =>{
        if(!userAuth) return;

        const userRef=firestore.doc(`users/${userAuth.uid}`);

        const snapShot =await userRef.get(); 

         if(!snapShot.exists){
           const {displayName ,email}=userAuth;
           const createdAt = new Date();

           try{
             await userRef.set({
               displayName,
               email,
               createdAt,
               ...additionalData
             })
           }catch(error){
             console.log('error creating user',error.message);

           }
         }

         return userRef;
      } 

      firebase.initializeApp(config);

      export const auth=firebase.auth();
      export const firestore=firebase.firestore();

      const provider =new firebase.auth.GoogleAuthProvider();
      provider.setCustomParameters({prompt: "select_account"});
      export const signInWithGoogle =()=> auth.signInWithPopup(provider);

      export default firebase;