import { SAVE_USER, REMOVE_USER } from "../actions/user_details_action";


function userReducer(store = {}, action) {
    let newStore = { ...store };
    const { type, payload } = action;

    switch (type) {
        case SAVE_USER:
            newStore = { ...newStore, ...payload };
            break;
        case REMOVE_USER:
            newStore = {};
            break;

        default:
            break;
    }
    return newStore;
}

export default userReducer;