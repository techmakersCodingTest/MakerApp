import { Button } from 'react-bootstrap';
import { pdfjs, Document, Page } from 'react-pdf';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { useState } from 'react';
import { IconButton } from '@mui/material';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
    'pdfjs-dist/build/pdf.worker.min.js',
    import.meta.url,
).toString();

type Props = {
    pdfUrl: string;
}

const PDFViewer = ({ pdfUrl }: Props) => {
    const [pageNumber, setPageNumber] = useState<number>(1);
    const [numPages, setNumPages] = useState<number>(0);

    function onDocumentLoadSuccess({ numPages }: { numPages: number }): void {
        setNumPages(numPages);
    }

    const goToPrevPage = () => {
        setPageNumber(prevPage => Math.max(prevPage - 1, 1));
    };

    const goToNextPage = () => {
        setPageNumber(prevPage => Math.min(prevPage + 1, numPages));
    };

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', backgroundColor: 'gray', paddingTop: '20px', position: 'relative', width: '80%', textAlign: 'center', margin: 'auto'}}>
            {/* Contenedor para los botones izquierdo y derecho */}
            <div style={{ position: 'absolute', top: '50%', left: '10px', transform: 'translateY(-50%)', zIndex: 2 }}>
                <IconButton aria-label="previous page" size="small" onClick={goToPrevPage} disabled={pageNumber === 1}
                    style={{
                        fontSize: '3vw',
                        borderRadius: '50%',
                        backgroundColor: '#f0f0f0',
                        width: '2vw',
                        height: '2vw',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                    <NavigateBeforeIcon fontSize="inherit" />
                </IconButton>
            </div>
            <div style={{ position: 'absolute', top: '50%', right: '10px', transform: 'translateY(-50%)', zIndex: 2 }}>
                <IconButton aria-label="next page" size="small" onClick={goToNextPage} disabled={pageNumber === numPages}
                    style={{
                        fontSize: '3vw',
                        borderRadius: '50%',
                        backgroundColor: '#f0f0f0',
                        width: '2vw',
                        height: '2vw',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                    <NavigateNextIcon fontSize="inherit" />
                </IconButton>
            </div>
            {/* Contenedor para el PDF con márgenes para los botones */}
            <div style={{ width: Math.min(600, window.innerWidth * 0.8), height: Math.min(750, (window.innerWidth * 0.8) * 1.414), overflow: 'hidden', position: 'relative', maxWidth: '80vw', maxHeight: '80vh', margin: '0 30px' }}>
                {pdfUrl && (
                    <Document file={pdfUrl} onLoadSuccess={onDocumentLoadSuccess}>
                        <Page pageNumber={pageNumber} width={Math.min(600, window.innerWidth * 0.8)} height={Math.min(750, (window.innerWidth * 0.8) * 1.414)} renderTextLayer={false} />
                    </Document>
                )}
            </div>
            <p>
                Página {pageNumber} de {numPages}
            </p>
        </div>
    );
};

export default PDFViewer;
