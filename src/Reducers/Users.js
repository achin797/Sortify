const users = (state = [], action) => {
    switch (action.type) {
        case 'REMOVE_USER':
            return state.filter(user => user.id !== action.payload);
        case 'ADD_USER_FULFILLED':
            return [...state, action.payload.userProfile]
        default:
            return state
    }
};

export default users