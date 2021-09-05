import { manageResource } from '../../../shared/utility';
import * as actionTypes from '../actionTypes';

const resource = (type, ...params) => manageResource('enrolments', {
    start: () => ({ type: actionTypes.ENROLMENTS_START }),
    success: data => ({ type: actionTypes.ENROLMENTS_SUCCESS, ...data }),
    fail: error => ({ type: actionTypes.ENROLMENTS_FAIL, error })
}, type, ...params);

export const resetEnrolments = () => ({ type: actionTypes.ENROLMENTS_RESET });
export const getEnrolments = (page = 1, show = 10, search = '') => resource('index', page = 1, show = 10, search = '');
export const getEnrolmentsInfo = () => resource('info');
export const getEnrolment = id => resource('show', id);
export const postEnrolments = data => resource('post', data);
export const patchEnrolments = (id, data) => resource('patch', id, data);
export const deleteEnrolments = id => resource('delete', id);