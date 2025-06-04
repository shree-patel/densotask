import React from 'react';
import { useCallback } from 'react';
import { useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { IoCloudUpload } from "react-icons/io5";
import Button from 'react-bootstrap/Button';
import { Modal } from 'react-bootstrap';

const FileUploader = () => {
 const [uploadedFile, setUploadedFile] = useState(false);
const [isModalVisible, setIsModalVisible] = useState(false);

 const handleFileDrop = useCallback((files) => {
    setUploadedFile(files[0]);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop: handleFileDrop,
    multiple: false,
    accept: {
      'application/pdf': ['.pdf'],
      'image/*': ['.jpeg', '.png', '.jpg'],
      'application/xml': ['.xml'],
    },
  });

  const closeModal = () => setIsModalVisible(false);
const openModal = () => setIsModalVisible(true);

  return (
    <div className="upload-wrapper p-4 bg-light rounded border text-center">
      <h3 className="mb-4 fw-semibold">Upload Flow Diagram to Generate XML</h3>

      <div
        {...getRootProps()}
        className={`file-dropzone p-5 rounded-border bg-white mb-2 ${
          isDragActive ? 'border-primary border-4' : ''
        }`}
        style={{cursor:"pointer"}}
      >
        <input {...getInputProps()} />
        <IoCloudUpload size={60} color="#338eea " />
        <br />
         <small className='text-muted'>Select a File</small>
        <p className='mb-2 mt-2'>or</p>
        <small className='text-muted'>Drag & Drop File</small>

        {uploadedFile && (
          <div className="mt-3 text-success fw-semibold">
            File chosen: {uploadedFile.name}
          </div>
        )}
      </div>

     <Button variant="outline-primary" onClick={openModal}>Proceed</Button>

      <Modal
        show={isModalVisible}
        onHide={closeModal}
        animation={false}
       size='md'
        centered
      >
        <Modal.Header
          closeButton
          className="justify-content-center text-center border-0"
        >
          <p className="w-100 fs-5 m-0">
            Do you want to retrieve Existing code or New?
          </p>
        </Modal.Header>

        <Modal.Footer className="d-flex justify-content-between w-100">
          <Button variant="primary" onClick={closeModal}>
            Existing
          </Button>
          <Button variant="success" onClick={closeModal}>
            New
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default FileUploader;
