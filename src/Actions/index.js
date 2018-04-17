import SpotifyService from '../Services/SpotifyService';


const token = "BQA2AOq7eUeOkIdkuQsizR2Z6XWMpkUWxXhZWE5m71xsmlaJSMsV3GVdrvZA--gJ7VjmEQMVXKEEPbYqVntL0hMmOi2dNtLXO6sAdFbRlNU5LaSj_oD_HDmhmE1yt3uTShpbPN9jynZzkuQCbBYO-sazAnWEapMWz4bV5s_5mlxMPWY5mr330MlVcKBfDsRZVofhEld90djSPiuyRjHL6MgittMcpKllG122yGF2V8Tn_7lpNpSrZGwvDYx4wYP3wZcZXD16m6TQ9rmvgLc"

export const addUser = () => {
    return {
    type: 'ADD_USER',
    payload: SpotifyService.newUser(token)
}};

export const removeUser = userId => {
    return {
    type: 'REMOVE_USER',
    payload: userId
}};

export const startLoading = (loadingMessage) => ({
    type: 'START_LOADING',
    payload: loadingMessage
});

export const stopLoading = () => ({
    type: 'STOP_LOADING'
});


