export const SAVE_USER = 'store/user';
export const REMOVE_USER = 'remove/user';

export function saveUser(details) {
    return (dispatch) => {
        dispatch({
            type: SAVE_USER,
            payload: {
                ...details
            }
        });
    };
}

export function removeUser() {
    return (dispatch) => {
        dispatch({
            type: REMOVE_USER
        });
    };
}