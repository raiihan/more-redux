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
        showBooks: state => state
    }
})

export const { showBooks } = bookSlice.actions;

export default bookSlice.reducer;