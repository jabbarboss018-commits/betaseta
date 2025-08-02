import { initializeApp, getApps, getApp, FirebaseApp } from "firebase/app";
import { getAuth, Auth } from "firebase/auth";
import { getFirestore, doc, updateDoc, deleteDoc, collection, addDoc, serverTimestamp, query, where, getDocs, Timestamp, Firestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

let app: FirebaseApp;
let auth: Auth;
let db: Firestore;

try {
    app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
    auth = getAuth(app);
    db = getFirestore(app);
} catch (e) {
    console.error("Failed to initialize Firebase", e);
    // Provide dummy objects to prevent app from crashing if config is invalid
    app = {} as FirebaseApp;
    auth = {} as Auth;
    db = {} as Firestore;
}

// Function to add a new loan application
export const addLoanApplication = async (applicationData: any) => {
    if (!db || typeof (db as any).collection !== 'function') throw new Error("Firestore is not initialized.");
    const dataWithTimestamp = {
        ...applicationData,
        submittedAt: serverTimestamp()
    };
    await addDoc(collection(db, "loanApplication"), dataWithTimestamp);
};

// Function to update loan application status and notes
export const updateLoanApplicationStatus = async (id: string, status: string, adminNotes: string) => {
    if (!db || typeof (db as any).doc !== 'function') throw new Error("Firestore is not initialized.");
    const applicationRef = doc(db, "loanApplication", id);
    await updateDoc(applicationRef, { status, adminNotes });
};

// Function to delete a loan application
export const deleteLoanApplication = async (id: string) => {
     if (!db || typeof (db as any).doc !== 'function') throw new Error("Firestore is not initialized.");
    const applicationRef = doc(db, "loanApplication", id);
    await deleteDoc(applicationRef);
};

// Function to get a loan application by CNIC
export const getLoanApplicationByCnic = async (cnic: string) => {
    if (!db || typeof (db as any).collection !== 'function') {
        throw new Error("Firestore is not initialized.");
    }
    const q = query(collection(db, "loanApplication"), where("cnic", "==", cnic));
    const querySnapshot = await getDocs(q);

    if (!querySnapshot.empty) {
        const docData = querySnapshot.docs[0].data();
        // Handle timestamp conversion safely
        let submittedAt = new Date().toISOString();
        if (docData.submittedAt && typeof docData.submittedAt.toDate === 'function') {
           submittedAt = docData.submittedAt.toDate().toISOString();
        } else if (docData.submittedAt && docData.submittedAt.seconds) {
            submittedAt = new Date(docData.submittedAt.seconds * 1000).toISOString();
        }

        return {
            id: querySnapshot.docs[0].id,
            ...docData,
            submittedAt,
        };
    }
    return null;
}

export { app, auth, db };
