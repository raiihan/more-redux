import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addBook } from './bookSlice';

const AddBook = () => {
    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");

    const numberofBooks = useSelector((state) => state.booksReducer.books.length)
    const dispatch = useDispatch()

    const navigate = useNavigate();

    const handleForm = (e) => {
        e.preventDefault()
        const book = { id: numberofBooks + 1, title, author }
        dispatch(addBook(book))
        navigate('/showbook', { replace: true })
    }
    return (
        <div>
            <h1>Add Book</h1>
            <form onSubmit={handleForm}>
                <div className="input-group">
                    <label htmlFor="title">Title: </label>
                    <input type="text" name="title" id="title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </div>
                <div className="input-group">
                    <label htmlFor="author">Author: </label>
                    <input type="text" name="author" id="author" value={author}
                        onChange={(e) => setAuthor(e.target.value)}
                    />
                </div>
                <button type="submit">Add Book</button>
            </form>
        </div>
    );
};

export default AddBook;