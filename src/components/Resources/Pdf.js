import React, { useState } from 'react';
import { Button } from './../Resources/PDF/Button';
import { Modal } from './../Resources/PDF/Model';

const PdfViewer = () => {
  const [modal, setModal] = useState(false);
  const [resume, setResume] = useState(null);

  const handleButtonClick = () => {
    setModal(true);
    // Set the external link to the resume state
    setResume("https://firebasestorage.googleapis.com/v0/b/website-f2fa5.appspot.com/o/pdf%2Fcv.pdf?alt=media&token=d3dcc957-76ff-4340-9c25-ebc1632a4195");
  };

  const handleCloseModal = () => {
    setModal(false);
  };

  return (
    <div className="container">
      <Button onClick={handleButtonClick} />
      {modal === true && (
        <Modal resume={resume} onCloseModal={handleCloseModal} />
      )}
    </div>
  );
};

export default PdfViewer;
