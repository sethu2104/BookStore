// AddBookstore.jsx
import { useState } from 'react';
import { TextField, Button, Container } from '@mui/material';

const AddBookstore = () => {
    const [storeName, setStoreName] = useState('');
    const [books, setBooks] = useState([]);

    const fetchBooks = async () => {
        const response = await fetch(
            `https://www.googleapis.com/books/v1/volumes?q=fiction`
        );
        const data = await response.json();
        setBooks(data.items || []);
    };

    const handleAddStore = () => {
        console.log(`Store "${storeName}" added with books:`, books);
        // Handle saving the store and books data
    };

    return (
        <Container>
            <h2>Add New Bookstore</h2>
            <TextField
                label="Bookstore Name"
                fullWidth
                value={storeName}
                onChange={(e) => setStoreName(e.target.value)}
            />
            <Button variant="contained" onClick={fetchBooks}>
                Fetch Books from Google Books
            </Button>
            <Button variant="contained" onClick={handleAddStore}>
                Add Store
            </Button>
        </Container>
    );
};

export default AddBookstore;
