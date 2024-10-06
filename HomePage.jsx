// HomePage.jsx
import { Button, Container, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
    const navigate = useNavigate();

    return (
        <Container>
            <Box sx={{ textAlign: 'center', mt: 5 }}>
                <h1>Welcome to the Bookstore</h1>
                <Button
                    variant="contained"
                    onClick={() => navigate('/admin')}
                    sx={{ m: 2 }}
                >
                    Admin
                </Button>
                <Button
                    variant="contained"
                    onClick={() => navigate('/user')}
                    sx={{ m: 2 }}
                >
                    User
                </Button>
            </Box>
        </Container>
    );
};

export default HomePage;
