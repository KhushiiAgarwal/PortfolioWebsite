import React, { useState } from 'react';

const VideoPlayer = () => {
  const [pdfUrl, setPdfUrl] = useState(null);
  const [showPdf, setShowPdf] = useState(false);

  const handleButtonClick = () => {
    setPdfUrl("https://firebasestorage.googleapis.com/v0/b/website-f2fa5.appspot.com/o/pdf%2Fcv.pdf?alt=media&token=d3dcc957-76ff-4340-9c25-ebc1632a4195");
    setShowPdf(true);
  };

  const handleClose = () => {
    setShowPdf(false);
  };

  return (
    <div>
      <button onClick={handleButtonClick}>View PDF</button>
      {showPdf && (
        <div className="pdf-container">
          <div className="pdf-header">
            <button onClick={handleClose}>Close</button>
          </div>
          <div className="pdf-body">
            <object data={pdfUrl} type="application/pdf" width="100%" height="800px">
              <p>Sorry, your browser doesn't support embedded PDFs.</p>
            </object>
          </div>
        </div>
      )}
    </div>
  );
};

export default VideoPlayer;
