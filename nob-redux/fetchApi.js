/**
 * async action = api fetch
 * midlleware - redux-thunk
 * axios api
 * **/
/**
 * create constant
 * state
 * action 
 * reducer
 * fetch api 
 * create store
 * dispatch
 * **/

const { default: axios } = require("axios");
const { createStore, applyMiddleware } = require("redux");
const { default: thunk } = require("redux-thunk");

// constant
const GET_API_REQUEST = 'GET_API_REQUEST';
const GET_API_SUCCESS = 'GET_API_SUCCESS';
const GET_API_FAILED = 'GET_API_FAILED';
const API_URL = 'https://jsonplaceholder.typicode.com/todos'
// state
const initialTodosState = {
    todos: [],
    isLoading: false,
    error: null
}

// action 
const getApiRequest = () => {
    return {
        type: GET_API_REQUEST
    };
};
const getApiSuccess = (todos) => {
    return {
        type: GET_API_SUCCESS,
        payload: todos
    };
};
const getApiFailed = (error) => {
    return {
        type: GET_API_FAILED,
        payload: error
    };
};

// reducer
const todosReducer = (state = initialTodosState, action) => {
    switch (action.type) {
        case GET_API_REQUEST:
            return {
                ...state,
                isLoading: true
            };
        case GET_API_SUCCESS:
            return {
                ...state,
                isLoading: false,
                todos: action.payload
            };
        case GET_API_FAILED:
            return {
                ...state,
                isLoading: false,
                error: action.payload
            };

        default:
            return state;
    }
}

const fetchApi = () => {
    return (dispatch) => {
        dispatch(getApiRequest())
        axios.get(API_URL)
            .then(res => {
                const todos = res.data;
                const titles = todos.map(todo => todo.title)
                dispatch(getApiSuccess(titles))
            })
            .catch(error => {
                const msg = error.message;
                dispatch(getApiFailed(msg))
            })
    }
}

const store = createStore(todosReducer, applyMiddleware(thunk))

store.subscribe(() => {
    console.log(store.getState());
})

store.dispatch(fetchApi())