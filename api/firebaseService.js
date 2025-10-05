// Importa las funciones necesarias de Firebase
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, query, where } from "firebase/firestore";

// Configuración de tu proyecto (reemplaza con tus datos reales)
const firebaseConfig = {
  apiKey: "AIzaSyC14uAOP0eWxuMYMS3KzVKF0-bUqwQvnOg",
  authDomain: "proyectofinalivaniapino.firebaseapp.com",
  projectId: "proyectofinalivaniapino",
  storageBucket: "proyectofinalivaniapino.firebasestorage.app",
  messagingSenderId: "693537814801",
  appId: "1:693537814801:web:1730c8442a41340b0074b0"
};

// Inicializa Firebase
const app = initializeApp(firebaseConfig);

// Inicializa Firestore
export const db = getFirestore(app);

// Función para obtener todos los productos
export const getProducts = async () => {
  const productsRef = collection(db, "products");
  const snapshot = await getDocs(productsRef);
  return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
};

// Función para obtener productos por categoría
export const getProductsByCategory = async (category) => {
  const productsRef = collection(db, "products");
  const q = query(productsRef, where("category", "==", category));
  const snapshot = await getDocs(q);
  return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
};
