import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { editBook } from './bookSlice';

const EditBook = () => {
    const location = useLocation()
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [id] = useState(location.state.id)
    const [title, setTitle] = useState(location.state.title)
    const [author, setAuthor] = useState(location.state.author)

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(editBook({ id, title, author }))
        navigate('/showbook', { replace: true })
    }
    return (
        <div>
            <h1>Edit Book</h1>
            <form onSubmit={handleSubmit}>
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
                <button type="submit">Update Book</button>
            </form>
        </div>
    );
};

export default EditBook;