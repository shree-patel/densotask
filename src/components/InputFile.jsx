import React from 'react'
import { IoIosCloudUpload } from "react-icons/io";
import Button from 'react-bootstrap/Button';
import { Form } from 'react-bootstrap';
import { useState } from 'react';

export default function InputFile() {
    const [file,setFile] = useState(null);

    const handleChange =(e)=>{
        setFile(e.target.files[0]);
    };
  return (
    <div className="p-4 border rounded bg-light text-center">
        <p className="fw-bold">Upload Flow Diagram For Generating XML</p>
        <div className="p-5 mb-3 border rounded bg-white">
            <IoIosCloudUpload size={40} color="#007bff"/>
            <p className="mt-2 mb-0">Choose File</p>
            <small  className="text-muted">or Drag & Drop File</small>
            <Form.Control type="file" onChange={handleChange} className="mt-3" />

        </div>
         <Button variant="outline-primary">Continue</Button>
       

    </div>
    
  )
}


