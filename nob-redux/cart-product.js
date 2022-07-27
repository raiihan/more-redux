const { createStore, combineReducers } = require('redux')

// PRODUCT  constant
const GET_PRODUCTS = 'GET_PRODUCTS';
const ADD_PRODUCT = 'ADD_PRODUCT'

// CART  constant
const GET_CART_ITEMS = 'GET_CART_ITEMS';
const ADD_CART_ITEM = 'ADD_CART_ITEM'

// product state
const initialProductState = {
    products: ['suger', 'rentil'],
    numberOfProducts: 2
}
// product state
const initialCartState = {
    carts: ['potato'],
    numberOfProducts: 1
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
// cart action 
const getCartsAction = () => {
    return {
        type: GET_CART_ITEMS
    }
}
const addCartAction = (cart) => {
    return {
        type: ADD_CART_ITEM,
        payload: cart
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
// cart reducer
const cartReducer = (state = initialCartState, action) => {
    switch (action.type) {
        case GET_CART_ITEMS:
            return {
                ...state
            };
        case ADD_CART_ITEM:
            return {
                ...state,
                carts: [...state.carts, action.payload],
                numberOfProducts: state.numberOfProducts + 1
            };

        default:
            return state;
    }
}

// combine reducer
const rootReducers = combineReducers({
    producrR: productReducer,
    cartR: cartReducer
})

// createstore
const store = createStore(rootReducers);
store.subscribe(() => {
    console.log(store.getState());
})

store.dispatch(getProductsAction())
store.dispatch(addProductAction('glass'))
store.dispatch(getProductsAction())


store.dispatch(getCartsAction())
store.dispatch(addCartAction('glass'))
store.dispatch(getCartsAction())