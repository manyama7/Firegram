import { useState, useEffect } from "react";
import { projectFirestore, collection, orderBy, query, onSnapshot } from "../firebase/config";

const useFirestore = (collectionRef) => {
    const [docs, setDocs] = useState([]);

    useEffect(() => {
        let q = query(collection(projectFirestore, collectionRef), orderBy('createdAt', 'desc'));
        const unsub = onSnapshot(q, (snap) => {
            let documents = [];
            snap.forEach((doc) => {
                documents.push({ ...doc.data(), id: doc.id });
            });
            setDocs(documents);
        });

        return () => unsub();
    }, [collectionRef]);

    return { docs };
}

export default useFirestore;