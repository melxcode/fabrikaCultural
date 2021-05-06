import firebase from "firebase/app";
import "firebase/database";

export const firebaseConfig = {
  apiKey: "AIzaSyDCxp_LRfRelUVnbdoes3V8drrCLRWFslA",
  authDomain: "cympropiedadesmerlo.firebaseapp.com",
  projectId: "cympropiedadesmerlo",
  storageBucket: "cympropiedadesmerlo.appspot.com",
  messagingSenderId: "1057974501886",
  appId: "1:1057974501886:web:f0a0b0b2ad3803e5b780af",
  measurementId: "G-5Y5YLDFFL2",
};

firebase.initializeApp(firebaseConfig);
const database = firebase.database();

const getHouses = async () => {
  const properties = await database
    .ref("propiedades")
    .once("value")
    .then((snap) => {
      return snap.val();
    });

  return properties;
};

export { getHouses };
