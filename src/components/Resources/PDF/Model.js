import React from 'react';
import { Worker } from '@react-pdf-viewer/core';
import { Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';


export const Modal = ({ resume, onCloseModal }) => {
  const defaultLayoutPluginInstance = defaultLayoutPlugin();

  return (
    <div className='backshadow'>
      <div className='custom-modal'>
        <div className='delete-icon' onClick={onCloseModal}>
          x
        </div>
        {resume !== null && (
          <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.14.305/build/pdf.worker.min.js">
            <Viewer fileUrl={resume} plugins={[defaultLayoutPluginInstance]} />
          </Worker>
        )}
      </div>
    </div>
  );
};
