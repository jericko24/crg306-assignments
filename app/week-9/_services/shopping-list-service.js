import { db } from "../_utils/firebase";
import { collection, getDocs, addDoc, query, getFirestore } from "firebase/firestore";

const db = getFirestore();

async function getItems() {
    const itemsCollection = collection(doc(db,'users',userId), 'items');
    const itemsSnapshot = await getDocs(itemsCollection);
    
    const itemsList = itemsSnapshot.docs.map(doc => doc.data());
    return itemsList;
}