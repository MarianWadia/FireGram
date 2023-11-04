import React, { useEffect } from 'react'
import useStorage from '../hooks/useStorage'
import {motion} from "framer-motion"

const ProgressBar = ({file}) => {
    const {progress, url, setProgress} = useStorage(file)
    // console.log(progress, url)

    useEffect(()=>{
        if(url && progress == 100){
            setTimeout(() => {
                setProgress(0)
            }, 1000);
        }
    }, [url, progress])
  return (
    <motion.div className='progress-bar' initial={{width: 0}} animate={{ width: `${progress}%` }}>
    </motion.div>
  )
}

export default ProgressBar