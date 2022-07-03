import { call, put, takeEvery } from 'redux-saga/effects';
import api from '../../api/axios';
import * as type from '../types';

function getApi ()  {
    return api.get('/users').then(res => res)
    .catch((error) => {throw error})
}

function* createUser(params) {
    try {
        yield call(api.post, '/users', params.user)
        yield call(fetchUsers)
    } catch(e) {
        yield put ({ type: type.GET_USERS_FAILED, message: e.message });
    }
}

function* deleteUser(params) {
    try {
        yield call(api.delete, `/user/${params.id}`)
        yield call(fetchUsers)
    } catch(e) {
        yield put ({ type: type.GET_USERS_FAILED, message: e.message });
    }
}

function* editUser(params) {
    console.log(params)
    try {
        yield call(api.put, `/user/${params.id}`,params.data)
        yield call(fetchUsers)
    } catch(e) {
        yield put ({ type: type.EDIT_USER, message: e.message });
    }
}

function* fetchUsers() {
    try {
        const users = yield call(getApi);
        yield put ({ type: type.GET_USERS_SUCCESS, users: users.data })
    } catch(e) {
        yield put ({ type: type.GET_USERS_FAILED, message: e.message });
    }
}

function* userSaga() {
    yield takeEvery(type.GET_USERS_REQUESTED, fetchUsers)
    yield takeEvery(type.POST_USERS_CREATE, createUser)
    yield takeEvery(type.DELETE_USER, deleteUser)
    yield takeEvery(type.EDIT_USER, editUser)
}

export default userSaga;