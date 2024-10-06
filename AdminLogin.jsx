// AdminLogin.jsx
import { useState } from 'react';
import { Button, TextField, Container } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const AdminLogin = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = () => {
        if (username === 'admin' && password === 'admin123') {
            navigate('/admin/dashboard');
        } else {
            alert('Invalid credentials');
        }
    };

    return (
        <Container>
            <h2>Admin Login</h2>
            <TextField
                label="Username"
                fullWidth
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <TextField
                label="Password"
                type="password"
                fullWidth
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <Button variant="contained" onClick={handleLogin}>
                Login
            </Button>
        </Container>
    );
};

export default AdminLogin;
