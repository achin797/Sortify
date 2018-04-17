import {combineReducers} from 'redux'
import loading from "./Loading"
import users from "./Users.js"
import songs from "./Songs"


export default combineReducers({loading, users, songs})

