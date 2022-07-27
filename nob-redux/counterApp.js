/**
 * state = 0
 * action -> increment, decrement, reset, increment by value
 * reducer
 * store
 * **/

const { createStore } = require('redux')

const INCREMENT = 'INCREMENT'
const INCREMENT_BY_VALUE = 'INCREMENT_BY_VALUE'
const DECREMENT = 'DECREMENT'
const RESET = 'RESET'


//  state
const initialState = {
    count: 0
}

// action
const incrementAction = () => {
    return {
        type: INCREMENT
    }
}
const incrementByValue = (value) => {
    return {
        type: INCREMENT_BY_VALUE,
        payload: value
    }
}
const decrementAction = () => {
    return {
        type: DECREMENT
    }
}
const resetAction = () => {
    return {
        type: RESET
    }
}

// reducer 
const counterReducer = (state = initialState, action) => {
    switch (action.type) {
        case INCREMENT:
            return {
                ...state,
                count: state.count + 1
            };
        case INCREMENT_BY_VALUE:
            return {
                ...state,
                count: state.count + action.payload
            };
        case DECREMENT:
            return {
                ...state,
                count: state.count - 1
            };
        case RESET:
            return {
                ...state,
                count: 0
            };

        default:
            return state;
    }
}

// create Store

const store = createStore(counterReducer)
store.subscribe(() => {
    console.log(store.getState());
})

// dispatch

store.dispatch(incrementAction())
store.dispatch(incrementAction())
store.dispatch(incrementAction())
store.dispatch(decrementAction())
store.dispatch(decrementAction())
store.dispatch(incrementAction())
store.dispatch(resetAction())
store.dispatch(incrementAction())
store.dispatch(incrementAction())
store.dispatch(incrementAction())
store.dispatch(resetAction())

store.dispatch(incrementByValue(5))
store.dispatch(incrementByValue(10))
store.dispatch(incrementByValue(15))

