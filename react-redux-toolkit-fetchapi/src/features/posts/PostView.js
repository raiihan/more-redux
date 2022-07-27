import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts } from './postsSlice';
const PostView = () => {
    const { isLoading, posts, error } = useSelector(state => state.posts)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchPosts())
    }, [dispatch])

    return (
        <div>
            <h2>Post Data</h2>
            {isLoading && <h3>Loading.....</h3>}
            {error && <h3>{error}</h3>}
            <section>
                {posts && posts.map(post => {
                    const { id, title, body } = post
                    return <article key={id}>
                        <h6>{title}</h6>
                        <p>{body}</p>
                    </article>
                })}
            </section>
        </div>
    );
};

export default PostView;