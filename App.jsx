
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BookBrowsing from './BookBrowsing';
import Recommendations from './Recommendations';
import EventListing from './EventListing';
import Wishlist from './Wishlist';
import QRScanner from './QRScanner';
import HomePage from './HomePage';
import AdminLogin from './AdminLogIn';
import AdminDashboard from './AdminDashBoard';
import AddBookstore from './AddBookStore';
import UserPage from './UserPage';
import UserBookList from './UserBookList';



function App() {


  return (
    // <>
    //   {/* <BookBrowsing />

    //   <EventListing /> */}
    //   {/* <WishList /> */}
    // </>
    < Router >
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* <Route path="/admin" element={<AdminLogin />} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="/admin/add-bookstore" element={<AddBookstore />} />
        <Route path="/user" element={<UserPage />} />
        <Route path="/user/books" element={<UserBookList />} /> */}
      </Routes>
    </Router >

    // <Router>
    //   <Routes>
    //     {/* <Route path="/" element={<BookBrowsing />} /> */}
    //     {/* <Route path="/recommendations" element={<Recommendations />} /> */}
    //     <Route path="/events" element={<EventListing />} />
    //     <Route path="/wishlist" element={<Wishlist />} />
    //     <Route path="/qr-scanner" element={<QRScanner />} />
    //   </Routes>
    // </Router>
  )
}

export default App
