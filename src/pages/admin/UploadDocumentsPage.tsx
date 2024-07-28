import React from 'react'
import StorageManagerCustom from '../../components/functional/StorageManagerCustom';

type Props = {}

const UploadDocumentsPage = (props: Props) => {
    return (
        <div style={{ paddingTop: '60px' }}>
            <StorageManagerCustom />
        </div>
    );
};

export default UploadDocumentsPage;