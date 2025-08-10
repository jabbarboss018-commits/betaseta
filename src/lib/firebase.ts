import { initializeApp, getApps, getApp, FirebaseApp } from "firebase/app";
import { getAuth, Auth } from "firebase/auth";
import { getFirestore, doc, updateDoc, deleteDoc, collection, addDoc, serverTimestamp, query, where, getDocs, Timestamp, Firestore, orderBy } from "firebase/firestore";

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
    console.error("Failed to initialize Firebase. Please check your environment variables.", e);
    // Assign empty objects if initialization fails, to prevent app crashing.
    app = {} as FirebaseApp;
    auth = {} as Auth;
    db = {} as Firestore;
}

// LOAN APPLICATION FUNCTIONS
export const addLoanApplication = async (applicationData: any) => {
    const dataWithTimestamp = {
        ...applicationData,
        submittedAt: serverTimestamp()
    };
    await addDoc(collection(db, "loanApplication"), dataWithTimestamp);
};

export const updateLoanApplicationStatus = async (id: string, status: string, adminNotes: string) => {
    const applicationRef = doc(db, "loanApplication", id);
    await updateDoc(applicationRef, { status, adminNotes });
};

export const deleteLoanApplication = async (id: string) => {
    const applicationRef = doc(db, "loanApplication", id);
    await deleteDoc(applicationRef);
};

export const getLoanApplicationByCnic = async (cnic: string) => {
    const q = query(collection(db, "loanApplication"), where("cnic", "==", cnic));
    const querySnapshot = await getDocs(q);

    if (!querySnapshot.empty) {
        const docData = querySnapshot.docs[0].data();
        let submittedAt = new Date().toISOString();
        if (docData.submittedAt instanceof Timestamp) {
           submittedAt = docData.submittedAt.toDate().toISOString();
        } else if (docData.submittedAt && typeof docData.submittedAt.seconds === 'number') {
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


// WHATSAPP CONTACT FUNCTIONS
export const getWhatsappContacts = async () => {
    if (!db || typeof db !== 'object' || Object.keys(db).length === 0) {
      console.warn("Firestore is not initialized, skipping fetch.");
      return [];
    }
    const q = query(collection(db, "whatsappContacts"), orderBy("name"));
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
};

export const addWhatsappContact = async (contactData: any) => {
    await addDoc(collection(db, "whatsappContacts"), contactData);
};

export const deleteWhatsappContact = async (id: string) => {
    const contactRef = doc(db, "whatsappContacts", id);
    await deleteDoc(contactRef);
};


export { app, auth, db };
