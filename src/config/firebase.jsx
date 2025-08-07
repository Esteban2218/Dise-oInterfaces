// Importa las funciones que necesitas
import { initializeApp } from "firebase/app";
// Importa el módulo de autenticación
import { getAuth } from "firebase/auth";

// Tu configuración de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDI6G9W_Pp_iFlikSIIsDpWykWG60iOjL0",
  authDomain: "trabajorookye.firebaseapp.com",
  projectId: "trabajorookye",
  storageBucket: "trabajorookye.firebasestorage.app",
  messagingSenderId: "1061558631865",
  appId: "1:1061558631865:web:f84b2ba193e25c7d2a8a68"
};

// Inicializa Firebase
const app = initializeApp(firebaseConfig);

// Inicializa el servicio de autenticación y lo exporta
export const auth = getAuth(app);