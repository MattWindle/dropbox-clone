"use client"
import { cn } from '@/lib/utils';
import DropzoneComponent from 'react-dropzone'

function Dropzone() {

    // Max file size 5mb
    const maxSize = 5000000;

    

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


