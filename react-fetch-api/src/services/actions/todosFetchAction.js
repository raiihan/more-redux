import axios from "axios"
import { getFailedAction, getRequestAction, getSuccessAction } from "./todosAction"

export const fetchData = () => async (dispatch) => {
    dispatch(getRequestAction())
    try {
        const { data } = await axios.get('https://jsonplaceholder.typicode.com/todos')
        dispatch(getSuccessAction(data))
    } catch (error) {
        dispatch(getFailedAction(error.message))
    }
}