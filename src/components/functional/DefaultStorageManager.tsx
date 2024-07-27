import {
  Card,
  Button,
  Flex,
  Text,
  Divider,
  Image,
  Loader,
  Icon,
} from '@aws-amplify/ui-react';
import { StorageManager } from '@aws-amplify/ui-react-storage';
import '@aws-amplify/ui-react/styles.css';
import { useState } from 'react';
import PDFViewer from '../presentational/PDFViewer';
import { useRef } from 'react'

type Props = {
  handleRefreshChange: (boolean) => void;
}

const processFile = async ({ file }) => {
  const fileExtension = file.name.split('.').pop();
  return file
    .arrayBuffer()
    .then((filebuffer) => window.crypto.subtle.digest('SHA-1', filebuffer))
    .then((hashBuffer) => {
      const hashArray = Array.from(new Uint8Array(hashBuffer));
      const hashHex = hashArray
        .map((a) => a.toString(16).padStart(2, '0'))
        .join('');
      return { file, key: "results" + `.${fileExtension}` };
    });
};

const DefaultStorageManager = ({ handleRefreshChange }: Props) => {
  // Estado para almacenar el Blob del archivo
  const [pdfFile, setPdfFile] = useState("");

  // Función para manejar el archivo cargado
  const handleFileChange = () => {
    handleRefreshChange(true)
  };

  const ref = useRef(null);

  return (
    <div>
      <StorageManager
        acceptedFileTypes={[
          'application/pdf'  // Asegúrate de incluir 'application/pdf' si solo trabajas con PDFs
        ]}
        path={({ identityId }) => `private/${identityId}/`}
        maxFileCount={1}
        showThumbnails={true}
        displayText={{
          dropFilesText: 'Arrastrar y soltar archivos aquí para subir',
          browseFilesText: 'Escoger archivo',
        }}
        onUploadError={(error, { key }) => {
          console.log("xd")
        }}
        processFile={processFile}
        onUploadSuccess={handleFileChange}
        components={{
          FileList({ files, onCancelUpload, onDeleteUpload }) {
            return (
              <h1 className="text-center" style={{
                fontSize: '10px',
                color: files.length > 0 && files[files.length - 1]?.id.split('.').pop()?.toLowerCase() === 'pdf' ? 'green' : 'red'
              }}>
                {files.length === 0 ? "" :
                  (files[files.length - 1]?.id.split('.').pop()?.toLowerCase() === 'pdf' ?
                    "Archivo PDF cargado" :
                    "Solo se admiten archivos PDF")
                }
              </h1>
            )
          }
        }}
        ref={ref}
      />
    </div>
  );
};

export default DefaultStorageManager