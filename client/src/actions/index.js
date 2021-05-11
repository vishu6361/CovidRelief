import * as api from '../api';
import * as actions from './actionTypes';

export const getData = () => async(dispatch) => {
    try {
        const { data } = await api.fetchData();
        dispatch({
            type: actions.FETCH_DATA,
            payload: data
        })
    } catch (error) {
        console.log(error.message);
    }
}

export const createUser = (user) => async(dispatch) => {
    try {
        const { data } = await api.createUser(user);
        dispatch({
            type: actions.CREATE_USER,
            payload: data
        });
    } catch (error) {
        console.log(error.message);
    }
}