import { deleteDoc, doc } from 'firebase/firestore';
import React, { useEffect } from 'react'
import { database, storage } from '../config/firebase';
import { deleteObject, ref } from 'firebase/storage';
import {motion} from "framer-motion"

const Modal = ({selectedImg, setSelectedImg, selectedImgId, fileUpload}) => {
  const documentRef = doc(database, 'Images', selectedImgId)
  const imageRef = ref(storage, `images/${fileUpload?.name}`)


  const closeModal=(e)=>{
    if(selectedImg && e.target.classList.contains('backdrop')){
      setSelectedImg(null);
    }
  }
  const deleteImg = (e) => {
      e.preventDefault()
       deleteDoc(documentRef)
        .then(()=>{
            deleteObject(imageRef)
        .then(()=>{
          setSelectedImg(null)
         })
         .catch((err)=>{
          console.error(err)
         })
       })
       .catch((err)=>{
        console.error(err)
       })
    }

  return( 
      <motion.div className='backdrop' onClick={closeModal} 
        initial={{opacity: 0}}
        animate={{opacity: 1}}
      >
        <motion.img src={selectedImg} alt='' 
          initial={{y: "-100vh"}} animate={{y: 0 }}
        />
        <motion.button onClick={deleteImg} type='submit' initial={{y: "-100vh"}} animate={{y: 0 }}>Delete Image</motion.button>
      </motion.div>
      )
  }

export default Modal