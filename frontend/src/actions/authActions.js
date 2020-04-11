import axios from 'axios';
import {
    USER_LOADING,
    USER_LOADED,
    AUTH_ERROR,
    LOGIN_FAIL,
    LOGOUT_SUCCESS,
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    LOGIN_SUCCESS,
} from './types';

//CHECK TOKEN & LOAD USER
export const loadUser = () => (dispatch, getState ) => {
    dispatch({ type: USER_LOADING });
    const token = getState().auth.token;
    const config = {
        headers: {
            'Authorization': null
        }
    }

    if (token){
        config.headers['Authorization'] = token;
    }
    
    axios.post('http://localhost:8080/api/authors', config)
        .then(res => dispatch({
            type: USER_LOADED,
            payload: res.data
        }))
        .catch(err => {
            dispatch({
                type: AUTH_ERROR
            });
        })
            
            
}

export const register = ({fullName, username, password}) => dispatch => {
    const body = JSON.stringify({ fullName, username, password});
    const config =  { headers: {
        'Content-Type': 'application/json'  
    }}

    axios.post("http://localhost:8080/api/authors", body, config)
        .then(res => {
            dispatch({
                type: REGISTER_SUCCESS,
                payload: res.data
            })
        
        }).catch(err => {
            dispatch({
                type: REGISTER_FAIL
            })
        })
}

export const logout = () => {
    return {
        type: LOGOUT_SUCCESS
    }
}

export const login = ({username, password}) => (dispatch, getState) => {
    const body = JSON.stringify({ username, password});

    const token = getState().auth.token;
    const config = {
        headers: {
            'Authorization': null,
            'Content-Type': 'application/json'  
        }
    }

    if (token){
        config.headers['Authorization'] = token;
    }

    axios.post("http://localhost:8080/api/auth", body, config)
        .then(res => {
            dispatch({
                type: LOGIN_SUCCESS,
                payload: res.data
            })
        
        }).catch(err => {
            dispatch({
                type: LOGIN_FAIL
            })
        })
}

export const loginWithStorage = (user) => {
    return {
        type: 'LOGIN_WITH_STORAGE',
        payload: user
    }
}