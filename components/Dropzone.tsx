"use client"
import DropzoneComponent from 'react-dropzone'

function Dropzone() {

    // Max file size 5mb
    const maxSize = 5000000;

    

  return (
    <DropzoneComponent minSize={0} maxSize={maxSize} onDrop={acceptedFiles => console.log(acceptedFiles)}>
    {({getRootProps, getInputProps, isDragActive, isDragReject, fileRejections }) => 
    {
        const isFileTooLarge = fileRejections.length > 0 && fileRejections[0].file.size > maxSize;
        return(
            <section>
                <div {...getRootProps()}>
                    <input {...getInputProps()} />
                    {!isDragActive && "Click here or drop a file to upload!"}
                    {isDragActive && !isDragReject && "Drop to upload this file..."}
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


