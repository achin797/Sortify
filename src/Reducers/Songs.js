const songs = (state = {}, action) => {
    switch (action.type) {
        case 'REMOVE_USER':
            return {};
        case 'ADD_USER_FULFILLED':
            return action.payload.userSongs
        default:
            return state
    }
};

export default songs