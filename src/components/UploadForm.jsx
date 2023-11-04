import React, { useState } from 'react'
import useStorage from "../hooks/useStorage"
import ProgressBar from './ProgressBar'

const UploadForm = ({fileUpload, setFileUpload}) => {
    const[error, setError] = useState(null)
    const allowedFiles = ['image/png', 'image/jpg', 'image/jpeg', 'image/gif']
    
    const onFileUpload = (e) => {
        const fileUploaded = e.target.files[0];
        if(fileUploaded!==null && allowedFiles.includes(fileUploaded.type)){
            setFileUpload(fileUploaded);
            setError(null);
        }else{
            setFileUpload(null);
            setError("File uploaded must be an image .png, .jpg, .jpeg or .gif");
        }
    }
  return (
    <div>
        <input type="file" name="file-upload" onChange={onFileUpload} className='button'/>
        {
        fileUpload ? 
            (<ProgressBar file={fileUpload} setFile={setFileUpload}/>) 
            : 
            (<h5>{error}</h5>)
        }
    </div>
  )
}

export default UploadForm