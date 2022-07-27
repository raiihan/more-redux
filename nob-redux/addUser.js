const { createStore } = require('redux')
const ADD_USER = 'ADD_USER'

const initialState = {
    user: ['anis'],
    count: 1
}

const addUserAction = (user) => {
    return {
        type: ADD_USER,
        payload: user
    }
}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_USER:

            return {
                user: [...state.user, action.payload],
                count: state.count + 1
            };

        default:
            return state;
    }
}

const store = createStore(userReducer)
store.subscribe(() => {
    console.log(store.getState());
})

store.dispatch(addUserAction('nahid'))
store.dispatch(addUserAction('papon'))