/**
 * 1. State
 * 2. dispatch action
 *      a. create constant
 * 3. reducer
 * 4. create store and update
 *      -- subscribe(), getState(), dispatch()
 * **/

const { createStore } = require("redux")

// constant
const INCREMENT = "INCREMENT"
const DECREMENT = "DECREMENT"

// state 
const initialState = {
    count: 0
}

const incrementAction = () => {
    return {
        type: INCREMENT
    }
}
const decrementAction = () => {
    return {
        type: DECREMENT
    }
}

// reducer

const counterReducer = (state = initialState, action) => {
    switch (action.type) {
        case INCREMENT:
            return {
                ...state,
                count: state.count + 1
            }
            break;
        case DECREMENT:
            return {
                ...state,
                count: state.count - 1
            }
            break;

        default:
            return state
            break;
    }
}

// create store

const store = createStore(counterReducer)

store.subscribe(() => {
    console.log(store.getState());
})

// dispatch action
store.dispatch(incrementAction())
store.dispatch(incrementAction())
store.dispatch(incrementAction())
store.dispatch(decrementAction())
store.dispatch(incrementAction())
store.dispatch(incrementAction())
store.dispatch(incrementAction())