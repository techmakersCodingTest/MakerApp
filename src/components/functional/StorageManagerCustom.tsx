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

const StorageManagerCustom = () => {
    // Estado para almacenar el Blob del archivo
    const [pdfFile, setPdfFile] = useState("");

    const callAPI = async () => {
        // Aquí es donde se envía el archivo procesado al endpoint
        const response = await fetch('https://f2jozc6rv5.execute-api.us-east-1.amazonaws.com/MakersStage/', {
          method: 'POST',
        });
      
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return await response.json();
      };

    return (
        <div>
            <StorageManager
                acceptedFileTypes={[
                    'application/json' 
                ]}
                path={({ identityId }) => `private/${identityId}/`}
                maxFileCount={1}
                showThumbnails={true}
                onUploadSuccess={callAPI}
                displayText={{
                    dropFilesText: 'Arrastrar y soltar archivos aquí para subir',
                    browseFilesText: 'Escoger archivo',
                }}
                onUploadError={(error, { key }) => {
                    console.log("xd")
                }}
            />
        </div>
    );
};

export default StorageManagerCustom