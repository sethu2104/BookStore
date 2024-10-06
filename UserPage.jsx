// UserPage.jsx
import { useState } from 'react';
import { Button, Container, Box } from '@mui/material';
import QrReader from 'react-qr-reader';
import { useNavigate } from 'react-router-dom';

const UserPage = () => {
    const [scanResult, setScanResult] = useState(null);
    const navigate = useNavigate();

    const handleScan = (data) => {
        if (data) {
            setScanResult(data);
            // Simulating navigation based on QR code
            navigate(`/user/books?store=${data}`);
        }
    };

    const handleError = (err) => {
        console.error(err);
    };

    return (
        <Container>
            <h2>Scan QR Code to Browse Books</h2>
            <QrReader delay={300} onError={handleError} onScan={handleScan} style={{ width: '100%' }} />
            {scanResult && <p>Scanned: {scanResult}</p>}
        </Container>
    );
};

export default UserPage;
