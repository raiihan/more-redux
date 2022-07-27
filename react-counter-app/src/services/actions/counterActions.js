import { DECREMENT, INCREMENT, INCREMENT_BY_VALUE, RESET } from "../constants/counterConstants"

export const incrementAction = () => {
    return {
        type: INCREMENT
    };
};
export const decrementAction = () => {
    return {
        type: DECREMENT
    };
};
export const resetAction = () => {
    return {
        type: RESET
    };
};

