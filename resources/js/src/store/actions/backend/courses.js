import { manageResource } from '../../../shared/utility';
import * as actionTypes from '../actionTypes';

const resource = (type, ...params) => manageResource('courses', {
    start: () => ({ type: actionTypes.COURSES_START }),
    success: data => ({ type: actionTypes.COURSES_SUCCESS, ...data }),
    fail: error => ({ type: actionTypes.COURSES_FAIL, error })
}, type, ...params);

export const resetCourses = () => ({ type: actionTypes.COURSES_RESET });
export const getCourses = (page = 1, show = 10, search = '') => resource('index', page = 1, show = 10, search = '');
export const getCoursesInfo = () => resource('info');
export const getCourse = id => resource('show', id);
export const postCourses = data => resource('post', data);
export const patchCourses = (id, data) => resource('patch', id, data);
export const deleteCourses = id => resource('delete', id);