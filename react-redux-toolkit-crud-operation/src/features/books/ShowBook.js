import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { deletBook } from './bookSlice';

const ShowBook = () => {
    const books = useSelector((state) => (state.booksReducer.books))
    const dispatch = useDispatch()

    return (
        <div>
            <h2>List of books</h2>
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Title</th>
                        <th>Author</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {books && books.map(book => {
                        const { id, title, author } = book;
                        return <tr key={id}>
                            <td>{id}</td>
                            <td>{title}</td>
                            <td>{author}</td>
                            <td>
                                <Link to={'/editbook'} state={{ id, title, author }}>
                                    <button>Edit</button>
                                </Link>
                                <button onClick={() => dispatch(deletBook(id))}>Delete</button>
                            </td>
                        </tr>
                    })}
                </tbody>
            </table>
        </div>
    );
};

export default ShowBook;