import { createSlice } from "@reduxjs/toolkit"

const initialBooks = {
    books: [
        { id: 1, title: "My Home", author: "Silvan" },
        { id: 2, title: "Detox", author: "Silvan" },
    ]
}

export const bookSlice = createSlice({
    name: 'books',
    initialState: initialBooks,
    reducers: {
        showBooks: state => state,
        addBook: (state, action) => {
            state.books.push(action.payload)
        },
        editBook: (state, action) => {
            const { id, title, author } = action.payload;
            const isBookExist = state.books.filter((book) => book.id === id)
            if (isBookExist) {
                isBookExist[0].title = title;
                isBookExist[0].author = author
            }
        },
        deletBook: (state, action) => {
            const id = action.payload;
            state.books = state.books.filter((book) => book.id !== id)
        }
    }
})

export const { showBooks, addBook, deletBook, editBook } = bookSlice.actions;

export default bookSlice.reducer;