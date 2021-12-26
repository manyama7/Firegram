import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, serverTimestamp, query, orderBy, onSnapshot } from "firebase/firestore";
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDiypfCW25LFF_euiC3cuMtzMepYhneKII",
    authDomain: "testwebsites-a9e97.firebaseapp.com",
    projectId: "testwebsites-a9e97",
    storageBucket: "testwebsites-a9e97.appspot.com",
    messagingSenderId: "629071194003",
    appId: "1:629071194003:web:391d65009d12670f89ea66"
};

const firebaseApp = initializeApp(firebaseConfig);

const projectStorage = getStorage();

const projectFirestore = getFirestore(firebaseApp);

export { projectStorage, projectFirestore, query, orderBy, serverTimestamp, ref, collection, onSnapshot, addDoc, uploadBytesResumable, getDownloadURL };