import React, { useEffect, useState, } from 'react';
import { useDropzone, FileWithPath } from 'react-dropzone';
import CSS from "csstype";
import { Button } from '@mui/material';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import PDFViewer from '../presentational/PDFViewer';

type Props = {
    setPdfFile: (url:string) => void;
}


const Dropzone = ({ setPdfFile }: Props) => {
    const { getRootProps, getInputProps, isDragActive, acceptedFiles } = useDropzone({});

    useEffect(() => {
        if (acceptedFiles.length > 0) {
            const file = acceptedFiles[0];
            const reader = new FileReader();
            reader.onload = () => {
                const blob = new Blob([reader.result as ArrayBuffer], { type: 'application/pdf' });
                const url = URL.createObjectURL(blob);
                setPdfFile(url);
            };
            reader.readAsArrayBuffer(file);
        }

    }, [acceptedFiles]);

    const files = acceptedFiles.map((file: FileWithPath) => (
        <li key={file.path}>
            {file.path} - {file.size} bytes
        </li>
    ));

    return (
        <div>
            <div style={styles} className="container">
                <div {...getRootProps({ className: "dropzone" })}>
                    <input {...getInputProps()} />
                    {isDragActive ? (
                        <p className="dropzone-content">
                            Release to drop the files here
                        </p>
                    ) : (
                        <p className="dropzone-content">
                            Arrastrar y soltar archivos aquí para subir
                        </p>
                    )}
                    <Button
                        component="label"
                        role={undefined}
                        variant="contained"
                        tabIndex={-1}
                        style={btnn}
                        startIcon={<CloudUploadIcon />}
                    >
                        Upload file
                    </Button>
                </div>
            </div>
        </div>
    );
}

const styles: CSS.Properties = {
    textAlign: 'center',
    padding: '20px',
    border: '3px #233044 dashed',
    width: '80%',
    margin: 'auto'
};

const btnn: CSS.Properties = {
    backgroundColor: '#233044'
};

export default Dropzone;