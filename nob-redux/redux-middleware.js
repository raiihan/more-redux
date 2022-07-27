const { createStore, applyMiddleware } = require('redux');
const { default: logger } = require('redux-logger');

// PRODUCT  constant
const GET_PRODUCTS = 'GET_PRODUCTS';
const ADD_PRODUCT = 'ADD_PRODUCT'

// product state
const initialProductState = {
    products: ['suger', 'rentil'],
    numberOfProducts: 2
}

// product action 
const getProductsAction = () => {
    return {
        type: GET_PRODUCTS
    }
}
const addProductAction = (product) => {
    return {
        type: ADD_PRODUCT,
        payload: product
    }
}
// product reducer
const productReducer = (state = initialProductState, action) => {
    switch (action.type) {
        case GET_PRODUCTS:
            return {
                ...state
            };
        case ADD_PRODUCT:
            return {
                ...state,
                products: [...state.products, action.payload],
                numberOfProducts: state.numberOfProducts + 1
            };

        default:
            return state;
    }
}



// createstore
const store = createStore(productReducer, applyMiddleware(logger));
store.subscribe(() => {
    console.log(store.getState());
})

store.dispatch(getProductsAction())
store.dispatch(addProductAction('glass'))
store.dispatch(getProductsAction())
