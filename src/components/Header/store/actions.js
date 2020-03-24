import { CHANGE_LOGIN } from './constans';
const changeLogin = (value) => ({
    type: CHANGE_LOGIN,
    value
})

export const login = () => {
    return (dispatch, getState, axiosInstance) => {
        return axiosInstance.get('/api/login').then(res => {
            dispatch(changeLogin(res.data.data.login))
        })
    }
}

export const logout = () => {
    return (dispatch, getState, axiosInstance) => {
        return axiosInstance.get('/api/logout').then(res => {
            dispatch(changeLogin(res.data.data.login))
        })
    }
}

export const getHeaderInfo = () => {
    return (dispatch, getState, axiosInstance) => {
        return axiosInstance.get('/api/isLogin').then( res => {
            console.log(res);
            console.log(123)
            dispatch(changeLogin(res.data.data.login))
        })
    }
}