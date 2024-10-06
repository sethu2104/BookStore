// AdminDashboard.jsx
import { Button, Container, Box } from '@mui/material';
import QRCode from 'qrcode.react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AdminDashboard = () => {
    const [qrValue, setQrValue] = useState('Sample Store');
    const navigate = useNavigate();

    return (
        <Container>
            <h2>Admin Dashboard</h2>
            <Box sx={{ textAlign: 'center' }}>
                <QRCode value={qrValue} />
                <p>QR Code for: {qrValue}</p>
                <Button variant="contained" onClick={() => navigate('/admin/add-bookstore')}>
                    + Add Bookstore
                </Button>
            </Box>
        </Container>
    );
};

export default AdminDashboard;
