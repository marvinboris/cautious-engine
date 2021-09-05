import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../shared/utility';

const initialState = {};

const resources = [
    'admins', 'cms', 'notifications', 'dashboard', 'features', 'languages', 'roles', 'users', 'methods', 'settings',
    'enrolments', 'payments', 'courses'
];

resources.forEach(resource => {
    initialState[resource] = {
        loading: false,
        error: null
    }
});

const reset = (root, state) => updateObject(state, { [root]: initialState[root] });
const start = (root, state) => updateObject(state, { [root]: updateObject(state[root], { loading: true, message: null }) });
const success = (root, state, action) => updateObject(state, { [root]: updateObject(state[root], { loading: false, error: null, ...action }) });
const fail = (root, state, action) => updateObject(state, { [root]: updateObject(state[root], { loading: false, ...action }) });

export default (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADMINS_RESET: return reset('admins', state, action);
        case actionTypes.ADMINS_START: return start('admins', state, action);
        case actionTypes.ADMINS_SUCCESS: return success('admins', state, action);
        case actionTypes.ADMINS_FAIL: return fail('admins', state, action);

        case actionTypes.CMS_RESET: return reset('cms', state, action);
        case actionTypes.CMS_START: return start('cms', state, action);
        case actionTypes.CMS_SUCCESS: return success('cms', state, action);
        case actionTypes.CMS_FAIL: return fail('cms', state, action);

        case actionTypes.NOTIFICATIONS_RESET: return reset('notifications', state, action);
        case actionTypes.NOTIFICATIONS_START: return start('notifications', state, action);
        case actionTypes.NOTIFICATIONS_SUCCESS: return success('notifications', state, action);
        case actionTypes.NOTIFICATIONS_FAIL: return fail('notifications', state, action);

        case actionTypes.DASHBOARD_RESET: return reset('dashboard', state, action);
        case actionTypes.DASHBOARD_START: return start('dashboard', state, action);
        case actionTypes.DASHBOARD_SUCCESS: return success('dashboard', state, action);
        case actionTypes.DASHBOARD_FAIL: return fail('dashboard', state, action);

        case actionTypes.FEATURES_RESET: return reset('features', state, action);
        case actionTypes.FEATURES_START: return start('features', state, action);
        case actionTypes.FEATURES_SUCCESS: return success('features', state, action);
        case actionTypes.FEATURES_FAIL: return fail('features', state, action);

        case actionTypes.LANGUAGES_RESET: return reset('languages', state, action);
        case actionTypes.LANGUAGES_START: return start('languages', state, action);
        case actionTypes.LANGUAGES_SUCCESS: return success('languages', state, action);
        case actionTypes.LANGUAGES_FAIL: return fail('languages', state, action);

        case actionTypes.ROLES_RESET: return reset('roles', state, action);
        case actionTypes.ROLES_START: return start('roles', state, action);
        case actionTypes.ROLES_SUCCESS: return success('roles', state, action);
        case actionTypes.ROLES_FAIL: return fail('roles', state, action);

        case actionTypes.USERS_RESET: return reset('users', state, action);
        case actionTypes.USERS_START: return start('users', state, action);
        case actionTypes.USERS_SUCCESS: return success('users', state, action);
        case actionTypes.USERS_FAIL: return fail('users', state, action);

        case actionTypes.METHODS_RESET: return reset('methods', state, action);
        case actionTypes.METHODS_START: return start('methods', state, action);
        case actionTypes.METHODS_SUCCESS: return success('methods', state, action);
        case actionTypes.METHODS_FAIL: return fail('methods', state, action);

        case actionTypes.SETTINGS_RESET: return reset('settings', state, action);
        case actionTypes.SETTINGS_START: return start('settings', state, action);
        case actionTypes.SETTINGS_SUCCESS: return success('settings', state, action);
        case actionTypes.SETTINGS_FAIL: return fail('settings', state, action);



        case actionTypes.ENROLMENTS_RESET: return reset('enrolments', state, action);
        case actionTypes.ENROLMENTS_START: return start('enrolments', state, action);
        case actionTypes.ENROLMENTS_SUCCESS: return success('enrolments', state, action);
        case actionTypes.ENROLMENTS_FAIL: return fail('enrolments', state, action);

        case actionTypes.PAYMENTS_RESET: return reset('payments', state, action);
        case actionTypes.PAYMENTS_START: return start('payments', state, action);
        case actionTypes.PAYMENTS_SUCCESS: return success('payments', state, action);
        case actionTypes.PAYMENTS_FAIL: return fail('payments', state, action);

        case actionTypes.COURSES_RESET: return reset('courses', state, action);
        case actionTypes.COURSES_START: return start('courses', state, action);
        case actionTypes.COURSES_SUCCESS: return success('courses', state, action);
        case actionTypes.COURSES_FAIL: return fail('courses', state, action);

        default: return state;
    }
};