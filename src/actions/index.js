import { takeLatest, call, put } from 'redux-saga/effects';
import axios from 'axios';

function getUsers(username) {
  const port = 'https://chaddit-server.herokuapp.com' || 'http://localhost:3001'
  return axios.post(`${port}/users`, { username })
  .then(result => new Promise((resolve, reject) => {
    resolve(username);
  })).catch(err => { return username })
}

export default function* sagas() {
  yield takeLatest('GET_USERNAME', showUsers);
}

function* showUsers(action) {
  try {
    const username = yield call(getUsers, action.username);
    yield put({ type: 'SET_USERNAME', username });
  } catch (err) {
    yield put({ type: 'API_CALL_FAILURE', err});
  }
}