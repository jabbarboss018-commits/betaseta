import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore, doc, updateDoc, deleteDoc, collection, addDoc, serverTimestamp, query, where, getDocs } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

// Check if all required environment variables are set
const isConfigValid =
  firebaseConfig.apiKey &&
  firebaseConfig.authDomain &&
  firebaseConfig.projectId &&
  firebaseConfig.storageBucket &&
  firebaseConfig.messagingSenderId &&
  firebaseConfig.appId;

let app;
let auth;
let db;

if (isConfigValid) {
    app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
    auth = getAuth(app);
    db = getFirestore(app);
} else {
    console.warn("Firebase config is incomplete. Firebase services will not be initialized.");
    // Provide dummy objects to prevent app from crashing
    app = {};
    auth = {};
    db = {};
}

// Function to add a new loan application
export const addLoanApplication = async (applicationData: any) => {
    if (!db || typeof db.collection !== 'function') throw new Error("Firestore is not initialized.");
    const dataWithTimestamp = {
        ...applicationData,
        submittedAt: serverTimestamp()
    };
    await addDoc(collection(db, "loanApplication"), dataWithTimestamp);
};


// Function to update loan application status and notes
export const updateLoanApplicationStatus = async (id: string, status: string, adminNotes: string) => {
    if (!db || typeof db.collection !== 'function') throw new Error("Firestore is not initialized.");
    const applicationRef = doc(db, "loanApplication", id);
    await updateDoc(applicationRef, { status, adminNotes });
};

// Function to delete a loan application
export const deleteLoanApplication = async (id: string) => {
    if (!db || typeof db.collection !== 'function') throw new Error("Firestore is not initialized.");
    const applicationRef = doc(db, "loanApplication", id);
    await deleteDoc(applicationRef);
};

// Function to get a loan application by CNIC
export const getLoanApplicationByCnic = async (cnic: string) => {
    if (!db || typeof db.collection !== 'function') throw new Error("Firestore is not initialized.");
    const q = query(collection(db, "loanApplication"), where("cnic", "==", cnic));
    const querySnapshot = await getDocs(q);
    if (!querySnapshot.empty) {
        const docData = querySnapshot.docs[0].data();
        return {
            id: querySnapshot.docs[0].id,
            ...docData,
        };
    }
    return null;
}


export { app, auth, db };