import { manageResource } from '../../../shared/utility';
import * as actionTypes from '../actionTypes';

const resource = (type, ...params) => manageResource('payments', {
    start: () => ({ type: actionTypes.PAYMENTS_START }),
    success: data => ({ type: actionTypes.PAYMENTS_SUCCESS, ...data }),
    fail: error => ({ type: actionTypes.PAYMENTS_FAIL, error })
}, type, ...params);

export const resetPayments = () => ({ type: actionTypes.PAYMENTS_RESET });
export const getPayments = (page = 1, show = 10, search = '') => resource('index', page = 1, show = 10, search = '');
export const getPaymentsInfo = () => resource('info');
export const getPayment = id => resource('show', id);
export const postPayments = data => resource('post', data);
export const patchPayments = (id, data) => resource('patch', id, data);
export const deletePayments = id => resource('delete', id);