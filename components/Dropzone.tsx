"use client"
import { cn } from '@/lib/utils';
import { useUser } from '@clerk/nextjs';
import { read } from 'fs';
import { useState } from 'react';
import DropzoneComponent from 'react-dropzone'

function Dropzone() {

    const [loading, isLoading] = useState(false);
    const {isLoaded, isSignedIn, user} = useUser();

    // Max file size 5mb
    const maxSize = 5000000;

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

    const uploadPost = async (selectedFile) => {
        if(loading) return;
        if(!user) return;
        isLoading(true)

        isLoading(false)
    }

  return (
    <DropzoneComponent minSize={0} maxSize={maxSize} onDrop={acceptedFiles => console.log(acceptedFiles)}>
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


