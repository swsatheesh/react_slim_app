function roughterReducer(store = {}, action) {
    let newStore = { ...store };
    const { type, payload } = action;

    switch (type) {
        case 'selectRoute':
            // new rought
            break;

        default:
            break;
    }
    return newStore;
}

export default roughterReducer;