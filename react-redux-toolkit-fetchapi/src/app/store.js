import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import postsReducer from '../features/posts/postsSlice';

const store = configureStore({
    reducer: {
        posts: postsReducer,
        counter: counterReducer
    }
})

export default store;