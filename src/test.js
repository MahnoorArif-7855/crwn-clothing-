import firebase from 'firebase/app';
import 'firebase/firestore';

const firestore = firebase.firestore();

firestore.collection('users').doc('4vHzeW6Ne7rvHH4oCw0F').collection('cartItems').doc('zXXd9Ihke0kyJNuC030E')
firestore.doc('/users/4vHzeW6Ne7rvHH4oCw0F/cartItems/zXXd9Ihke0kyJNuC030E');
firestore.collection('/users/4vHzeW6Ne7rvHH4oCw0F/cartItems');
