import { GET_TODOS_FAILED, GET_TODOS_REQUEST, GET_TODOS_SUCCESS } from "../constants/todosContstant"

export const getRequestAction = () => {
    return {
        type: GET_TODOS_REQUEST
    }
}
export const getSuccessAction = (todos) => {
    return {
        type: GET_TODOS_SUCCESS,
        payload: todos
    }
}
export const getFailedAction = (error) => {
    return {
        type: GET_TODOS_FAILED,
        payload: error
    }
}