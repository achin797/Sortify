const loading = (state = {isLoading: false}, action) => {
    switch (action.type) {
        case 'START_LOADING':
            return {isLoading: true, loadingMessage: "loading..."};
        case 'ADD_USER_PENDING':
            return {isLoading: true, loadingMessage: "Loading user data..."};
        case 'STOP_LOADING':
        case 'ADD_USER_FULFILLED':
            return {isLoading: false};
        default:
            return state
    }
}

export default loading