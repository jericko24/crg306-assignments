import { db } from "../_utils/firebase";
import { collection, doc, getDocs, addDoc, query } from "firebase/firestore";


export async function getItems(userId) {
    if (!userId) {
        throw new Error('User ID is required');
    }

    const itemsCollection = collection(doc(db,'users',userId), 'items');
    const itemsQuery = query(itemsCollection);
    const itemsSnapshot = await getDocs(itemsQuery);

    const items = [];
    itemsSnapshot.forEach(doc => {
        items.push({
            id: doc.id,
            ...doc.data()
        });
    });

    return items;
}

export async function addItem(userId, item) {
    const itemsCollection = collection(doc(db,'users',userId), 'items');
    const docRef = await addDoc(itemsCollection, item);
    return docRef.id;
}