import * as api from '../api';
import * as actions from './actionTypes';

export const getData = () => async(dispatch) => {
    try {
        const { data } = await api.fetchData();
        // const value = data;
        console.log(data);
        dispatch({
            type: actions.FETCH_DATA,
            payload: data
        })
    } catch (error) {
        console.log(error.message);
    }
}