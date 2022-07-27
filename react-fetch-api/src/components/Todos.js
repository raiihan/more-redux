import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchData } from '../services/actions/todosAction';

const Todos = () => {
    const { isLoading, error, todos } = useSelector((state) => state);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchData())
    }, [dispatch])
    return (
        <div>
            <h2>Display todos</h2>
            {isLoading && <h4>Loading.....</h4>}
            {error && <h4>{error}</h4>}
            <section>
                {todos && todos.map(todo => {
                    const { id, title } = todo
                    return <article key={id}>
                        <h4>{id}</h4>
                        <h5>{title}</h5>
                    </article>
                })}
            </section>
        </div>
    );
};

export default Todos;