import firebase from "firebase/app";
import "firebase/database";
import axios from "axios";
import { API_KEY, IMAGE_HOST_URL } from "../config";

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
    .ref("properties")
    .once("value")
    .then((snap) => {
      const items = [];
      snap.forEach((itemSnap) => {
        items.push(itemSnap.val());
      });
      return items;
    });

  return properties;
};

const getNumber = async () => {
  const number = await database
    .ref("numero")
    .once("value")
    .then((snap) => {
      return snap.val();
    });

  return number;
};

const getPassword = async () => {
  const number = await database
    .ref("password")
    .once("value")
    .then((snap) => {
      return snap.val();
    });

  return number;
};

const createHouse = async (formData) => {
  const rootRef = firebase.database().ref("/");
  const properties = rootRef.child("properties");
  await properties.push(formData);
};

const uploadPhoto = async (image) => {
  let newImage;
  try {
    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    };

    const url = new URL(`${IMAGE_HOST_URL}/1/upload?key=${API_KEY}`);
    const formData = new FormData();
    formData.append("image", image);

    const response = await axios.post(url, formData, config);
    newImage = response.data.data.url;
    return newImage;
  } catch (error) {
    console.log(error);
  }
};

export { getHouses, getNumber, createHouse, uploadPhoto, getPassword };
