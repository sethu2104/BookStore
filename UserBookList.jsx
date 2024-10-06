// UserBookList.jsx
import { TextField, Container, List, ListItem } from '@mui/material';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';

const UserBookList = () => {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const store = queryParams.get('store');
    const [search, setSearch] = useState('');

    const books = [
        { id: 1, title: 'The Catcher in the Rye', author: 'J.D. Salinger' },
        { id: 2, title: 'To Kill a Mockingbird', author: 'Harper Lee' },
        { id: 3, title: '1984', author: 'George Orwell' },
    ];

    const filteredBooks = books.filter((book) =>
        book.title.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <Container>
            <h2>Available Books at {store}</h2>
            <TextField
                label="Search Books"
                fullWidth
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />
            <List>
                {filteredBooks.map((book) => (
                    <ListItem key={book.id}>
                        {book.title} by {book.author}
                    </ListItem>
                ))}
            </List>
        </Container>
    );
};

export default UserBookList;
