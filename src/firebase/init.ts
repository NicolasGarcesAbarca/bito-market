import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_APIKEY,
  authDomain: import.meta.env.VITE_AUTH,
  projectId: import.meta.env.VITE_PROID,
  storageBucket: import.meta.env.VITE_STOR,
  messagingSenderId: import.meta.env.VITE_MSGID,
  appId: import.meta.env.VITE_APPID
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

