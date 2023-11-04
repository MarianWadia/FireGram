/* eslint-disable no-lone-blocks */
import useFirestore from '../hooks/useFirestore'
import { motion } from "framer-motion"

const ImagesGrid = ({ setSelectedImg, setSelectedImgId }) => {
  const { docs } = useFirestore("Images");

  const handleClick = (id, url) => {
    setSelectedImg(url);
    setSelectedImgId(id);
  };

//   console.log(docs);

  return (
    <>
        {docs.length > 0 ?( 
            <div className='img-grid'>
            {
                docs.map((doc) => (
                    <motion.div
                    className='img-wrapper'
                    key={doc?.id}
                    onClick={() => handleClick(doc?.id, doc?.url)}
                    layout
                    whileHover={{ opacity: 1 }}
                    >
                    <motion.img
                        src={doc?.url}
                        alt={`${doc ? 'image uploaded' : ''}`}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1 }}
                    />
                    </motion.div>
                ))
            }
            </div>
            ):
            (
                <div className='no-imgs'>
                    <p>No images have been uploaded yet</p>
                </div>
            )}
        </>
    )};

export default ImagesGrid;
