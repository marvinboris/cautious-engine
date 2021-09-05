import * as actionTypes from '../actionTypes';

const prefix = '/api/';

export const resetMethods = () => ({ type: actionTypes.METHODS_RESET });
const methodsStart = () => ({ type: actionTypes.METHODS_START });
const methodsSuccess = data => ({ type: actionTypes.METHODS_SUCCESS, ...data });
const methodsFail = error => ({ type: actionTypes.METHODS_FAIL, error });
export const getMethods = (page = 1, show = 10, search = '') => async (dispatch, getState) => {
    dispatch(methodsStart());
    const { role } = getState().auth;

    try {
        const token = localStorage.getItem('token');
        const res = await fetch(`${prefix + role}/methods?page=${page}&show=${show}&search=${search}`, {
            headers: {
                Authorization: token
            }
        });
        const resData = await res.json();
        dispatch(methodsSuccess(resData));
    } catch (error) {
        console.log(error);
        dispatch(methodsFail(error));
    }
};

export const getMethod = id => async (dispatch, getState) => {
    dispatch(methodsStart());
    const { role } = getState().auth;

    try {
        const token = localStorage.getItem('token');
        const res = await fetch(`${prefix + role}/methods/${id}`, {
            headers: {
                Authorization: token
            }
        });
        const resData = await res.json();
        dispatch(methodsSuccess(resData));
    } catch (error) {
        console.log(error);
        dispatch(methodsFail(error));
    }
};

export const postMethods = data => async (dispatch, getState) => {
    dispatch(methodsStart());
    const { role } = getState().auth;

    try {
        const token = localStorage.getItem('token');
        const form = new FormData(data);
        const res = await fetch(`${prefix + role}/methods`, {
            method: 'POST',
            body: form,
            headers: {
                Authorization: token
            }
        });
        const resData = await res.json();
        if (res.status === 422) throw new Error(Object.values(resData.errors).join('\n'));
        else if (res.status !== 200 && res.status !== 201) throw new Error(resData.error.message);
        dispatch(methodsSuccess(resData));
    } catch (error) {
        console.log(error);
        dispatch(methodsFail(error));
    }
};

export const patchMethods = (id, data) => async (dispatch, getState) => {
    dispatch(methodsStart());
    const { role } = getState().auth;

    try {
        const token = localStorage.getItem('token');
        const form = new FormData(data);
        const res = await fetch(`${prefix + role}/methods/${id}`, {
            method: 'POST',
            body: form,
            headers: {
                Authorization: token,
            }
        });
        const resData = await res.json();
        if (res.status === 422) throw new Error(Object.values(resData.errors).join('\n'));
        dispatch(methodsSuccess(resData));
    } catch (error) {
        console.log(error);
        dispatch(methodsFail(error));
    }
};

export const deleteMethods = id => async (dispatch, getState) => {
    dispatch(methodsStart());
    const { role } = getState().auth;

    try {
        const page = document.getElementById('table-page').value;
        const show = document.getElementById('table-show').value;
        const search = document.getElementById('table-search').value;

        const token = localStorage.getItem('token');
        const res = await fetch(`${prefix + role}/methods/${id}?page=${page}&show=${show}&search=${search}`, {
            method: 'DELETE',
            headers: {
                Authorization: token
            }
        });
        const resData = await res.json();
        if (res.status === 422) throw new Error(Object.values(resData.errors).join('\n'));
        dispatch(methodsSuccess(resData));
    } catch (error) {
        console.log(error);
        dispatch(methodsFail(error));
    }
};