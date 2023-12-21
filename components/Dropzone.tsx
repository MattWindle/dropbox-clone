"use client"
import { db, storage } from '@/firebase';
import { cn } from '@/lib/utils';
import { useUser } from '@clerk/nextjs';
import { addDoc, collection, doc, serverTimestamp, updateDoc } from 'firebase/firestore';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { useState } from 'react';
import DropzoneComponent from 'react-dropzone'

function Dropzone() {

    const [loading, isLoading] = useState(false);
    const {isLoaded, isSignedIn, user} = useUser();

    // Max file size 5mb
    const maxSize = 5000000;

    // The drop function
    const onDrop = (acceptedFiles: File[]) => {
        acceptedFiles.forEach(file => {
            const reader = new FileReader();
            reader.onabort = () => console.log("File Aborted");
            reader.onerror = () => console.log("File Aborted");
            reader.onload = async () => {
                await uploadPost(file);
            };
            reader.readAsArrayBuffer(file);
        })
    }
    // Upload post function
    const uploadPost = async (selectedFile: File) => {       
        if(loading) return;
        if(!user) return;

        isLoading(true)

        // Creates the document to the image in the database
        const docRef = await addDoc(collection(db, "users", user.id, "files"), {
            userId: user.id,
            filename: selectedFile.name,
            fullname: user.fullName,
            profileImg: user.imageUrl,
            timestamp: serverTimestamp(),
            type: selectedFile.type,
            size: selectedFile.size,
        })

        // creates a reference to the image in storage linked to the ID of the document created
        const imageRef = ref(storage, `users/${user.id}/files/${docRef.id}`);

        // The selected file is uploaded to the storage location which is being referenced to above using the docID
        // Once the image has been uploaded to Firebase, a downloadURL is generated 
        // The download URL is then added to the Document so the document has reference to the uploaded image download link.
        uploadBytes(imageRef, selectedFile).then(async (snapshot) => {
            const downloadURL = await getDownloadURL(imageRef); // Gets download URL

            await updateDoc(doc(db, "users", user.id, "files", docRef.id), {
                downloadURL: downloadURL,
            });
        });
        isLoading(false)
    }

  return (
    <DropzoneComponent minSize={0} maxSize={maxSize} onDrop={onDrop}>
    {({getRootProps, getInputProps, isDragActive, isDragReject, fileRejections,  }) => 
    {
        const isFileTooLarge = fileRejections.length > 0 && fileRejections[0].file.size > maxSize;
        return(
            <section className='m-4'>
                <div {...getRootProps()} className={cn("flex items-center justify-center text-lg p-6 h-52 border-2 rounded-lg border-gray-500 border-dashed text-gray-900 font-semibold uppercase text-center cursor-pointer bg-slate-100/50", isDragActive ? "bg-[#035FFE] animate-pulse text-white" : null)}>
                    <input {...getInputProps()} />
                    {!isDragActive && "Click here or drop a file to upload!"}
                    {isDragActive && !isDragReject && "Drop to upload this file."}
                    {isDragReject && "File type not accepted, sorry 🥲🥲"}
                    {isFileTooLarge && (
                        <p>File too big</p>
                    )}
                    
                </div>
            </section>
        )
    }

    }
    </DropzoneComponent>
  )
}

export default Dropzone


