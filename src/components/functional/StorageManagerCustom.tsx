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
            />
        </div>
    );
};

export default StorageManagerCustom