import Title from './components/Title';
import UploadForm from './components/UploadForm';
import ImagesGrid from './components/ImagesGrid'
import { useState } from 'react';
import Modal from './components/Modal';

function App() {
  const [selectedImg, setSelectedImg] = useState(null)
  const [selectedImgId, setSelectedImgId] = useState(null)
  const[fileUpload, setFileUpload] = useState(null)
  const [selectedImgName, setSelectedImgName] = useState(null)
  return (
    <div className="App">
      <Title />
      <UploadForm fileUpload={fileUpload} setFileUpload={setFileUpload} />
      <ImagesGrid 
        setSelectedImg={setSelectedImg} 
        setSelectedImgId={setSelectedImgId} 
        setSelectedImgName={setSelectedImgName}
      />
      {selectedImg&&
        (
          <Modal 
            selectedImg={selectedImg} 
            setSelectedImg={setSelectedImg} 
            selectedImgId={selectedImgId} 
            fileUpload={fileUpload} 
            selectedImgName={selectedImgName}
            />
          )
        }
    </div>
  );
}

export default App;
