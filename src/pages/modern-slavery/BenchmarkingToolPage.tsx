import React, { useState } from 'react';

const BenchmarkingToolPage = () => {
    const [isLoading, setIsLoading] = useState(true);

    return (
        <div style={{ position: 'relative', height: '100vh', paddingTop: '60px' }}>
            {isLoading && (
                <div style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    zIndex: 2
                }}>
                    <div style={{ border: '3px solid #f3f3f3', borderTop: '3px solid #233044', borderRadius: '50%', width: '40px', height: '40px', animation: 'spin 2s linear infinite' }} />
                    <style>{`
                        @keyframes spin {
                            0% { transform: rotate(0deg); }
                            100% { transform: rotate(360deg); }
                        }
                    `}</style>
                </div>
            )}
            <iframe
                src="https://www.walkfree.org/resources/modern-slavery-benchmarking-tool/"
                width="100%"
                height="100%"
                style={{ border: 'none', display: isLoading ? 'none' : 'block' }}  // Ocultar el iframe mientras se carga
                title="Modern Slavery Benchmarking Tool"
                onLoad={() => setIsLoading(false)}  // Cambiar el estado cuando el iframe esté cargado
            ></iframe>
        </div>
    );
};

export default BenchmarkingToolPage;