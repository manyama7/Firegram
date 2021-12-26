import { useState, useEffect } from 'react';
import { projectStorage, projectFirestore, serverTimestamp, ref, collection, addDoc, uploadBytesResumable, getDownloadURL } from '../firebase/config';

const useStorage = (file) => {
    const [progress, setProgress] = useState(0);
    const [error, setError] = useState(null);
    const [url, setUrl] = useState(null);

    useEffect(() => {
        // references
        const storageRef = ref(projectStorage, 'photoGallery/' + file.name);
        const collectionRef = collection(projectFirestore, 'images');

        const uploadTask = uploadBytesResumable(storageRef, file);

        uploadTask.on('state_changed', (snap) => {
            let percentage = (snap.bytesTransferred / snap.totalBytes) * 100;
            console.log('Upload is ' + progress + '% done');
            setProgress(percentage);
        }, (err) => {
            setError(err);
        }, async () => {
            const url = await getDownloadURL(uploadTask.snapshot.ref);
            const createdAt = serverTimestamp();
            await addDoc(collectionRef,
                {
                    url,
                    createdAt
                });
            setUrl(url);
        })
    }, [file]);

    return { progress, url, error }

}

export default useStorage;
