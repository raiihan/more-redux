import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AddBook from '../features/books/AddBook';
import ShowBook from '../features/books/ShowBook';
import Navbar from '../layouts/Navbar';
import Home from '../pages/Home';
import NotFound from '../pages/NotFound';

const Index = () => {
    return (
        <BrowserRouter>
            <Navbar />
            <main>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/addbook' element={<AddBook />} />
                    <Route path='/showbook' element={<ShowBook />} />
                    <Route path='*' element={<NotFound />} />
                </Routes>
            </main>
        </BrowserRouter>
    );
};

export default Index;