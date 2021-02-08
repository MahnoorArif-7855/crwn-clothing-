import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config =
{
  apiKey: "AIzaSyBNUV-RttbSrvJQlcPwEAB6yml1iqH344U",
  authDomain: "crwn-db-9aad4.firebaseapp.com",
  projectId: "crwn-db-9aad4",
  storageBucket: "crwn-db-9aad4.appspot.com",
  messagingSenderId: "956750720022",
  appId: "1:956750720022:web:5398815aac423154cc1937",
  measurementId: "G-LQBVJBMK1P"
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

      export const addCollectionAndDocuments = async (collectionKey, objectToAdd) =>{
        const collectionRef = firestore.collection(collectionKey)
        console.log(collectionRef);

        const batch= firestore.batch();
        objectToAdd.forEach(obj =>{
          const newDocRef=collectionRef.doc();
          batch.set(newDocRef,obj);
        });
       return await batch.commit();
      };

    export const convertCollectionsSnapshotToMap = (collections) =>{
        const transformedCollection = collections.docs.map(docSnapshot =>{
          const {title,items}= docSnapshot.data()
        
          return{
            routeName: encodeURI(title.toLowerCase()),
            id:docSnapshot.id,
            title,
            items
          };;
        });
        return transformedCollection.reduce((accumlator,collection) =>{
          accumlator[collection.title.toLowerCase()]=collection;
          return accumlator; 
        }, {})
      }

      firebase.initializeApp(config);

      export const auth=firebase.auth();
      export const firestore=firebase.firestore();

      const provider =new firebase.auth.GoogleAuthProvider();
      provider.setCustomParameters({prompt: "select_account"});
      export const signInWithGoogle =()=> auth.signInWithPopup(provider);

      export default firebase;