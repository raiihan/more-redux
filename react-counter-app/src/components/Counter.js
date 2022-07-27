import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { decrementAction, incrementAction, incrementByValue, resetAction } from '../services/actions/counterActions';

const Counter = () => {
    const count = useSelector(state => state.count)
    const dispatch = useDispatch()
    return (
        <div>
            <h2>Counter app</h2>

            <h3>Count: {count}</h3>
            <button onClick={() => dispatch(incrementAction())}>Increment</button>
            <button onClick={() => dispatch(decrementAction())}>Decrement</button>
            <button onClick={() => dispatch(resetAction())}>Reset</button>
            <button onClick={() => dispatch(incrementByValue(5))}>IncrementByValue</button>

        </div>
    );
};

export default Counter;