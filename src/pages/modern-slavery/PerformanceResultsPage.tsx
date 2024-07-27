import React, { useEffect, useState } from 'react'
import PDFViewer from '../../components/presentational/PDFViewer';
import DefaultStorageManager from '../../components/functional/DefaultStorageManager';
import { getUrl } from 'aws-amplify/storage';
import StorageManagerCustom from '../../components/functional/StorageManagerCustom';

type Props = {}

const PerformanceResultsPage = (props: Props) => {
    const [refresh, setRefresh] = useState<boolean>(false);
    const [pdfUrl, setPdfUrl] = useState<string>("");
    const [show, setShow] = useState<boolean>(false);

    useEffect(() => {
        const fetchPdfUrl = async () => {
            const result = await getUrl({
                path: ({ identityId }) => `private/${identityId}/results.pdf`,
                options: {
                    validateObjectExistence: true,  // Check if object exists before creating a URL
                },
            });
            if (result && result.url) {
                console.log("xd", result.url.toString())
                setPdfUrl(result.url.toString());
            }
            console.log("xd", result)
        };

        if (refresh) {
            fetchPdfUrl();
            setRefresh(false)
        }
    }, [refresh]);

    useEffect(() => {
        const checkFileExistence = async () => {
            try {
                const result = await getUrl({
                    path: ({ identityId }) => `private/${identityId}/results.pdf`,
                    options: {
                        validateObjectExistence: true
                    }
                });

                if (result && result.url) {
                    setPdfUrl(result.url.toString());
                    setShow(true)
                } else {
                    console.log("El archivo no existe.");
                }
            } catch (error) {
                console.log("Error al verificar la existencia del archivo:", error);
            }
        };

        // Ejecutar la función asincrónica dentro de useEffect
        checkFileExistence();
    }, []);

    const handleRefreshChange = (text) => {
        setRefresh(text)
    }

    return (
        <div style={{ paddingTop: '60px' }}>
            <div className="container" style={{ paddingBottom: '60px' }}>
                <h1 className="text-center" style={{paddingLeft: '20px'}}> Actualiza tu Resultado de Desempeño</h1>
                <DefaultStorageManager handleRefreshChange={handleRefreshChange} />
            </div>
            <div>
            <h1 className="text-center" style={{paddingLeft: '20px'}}> Último Resultado de Desempeño</h1>
                {(refresh || show) && (
                    <PDFViewer pdfUrl={pdfUrl} />
                )}
            </div>
        </div>
    );
};

export default PerformanceResultsPage;