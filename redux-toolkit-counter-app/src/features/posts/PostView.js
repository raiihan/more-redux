import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPost } from './postsSlice';

const PostView = () => {
    const { isLoading, posts, error } = useSelector(state => state.posts)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchPost())
    }, [dispatch])
    if (isLoading) {
        return <h1>Loading.....</h1>
    }

    return (
        <div>
            <h3>Post Fetch</h3>
            {error && <h3>{error}</h3>}
            <section>
                {posts && posts.map(post => {
                    const { id, body, title } = post
                    return <article key={id}>
                        <h4>{title}</h4>
                        <p>{body}</p>
                    </article>
                })}
            </section>
        </div>
    );
};

export default PostView;