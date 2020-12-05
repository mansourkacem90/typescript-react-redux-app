import { put, takeEvery, takeLatest, delay } from 'redux-saga/effects';

function* ageUpAsync() {
  yield delay(4000);
  yield put({ type: 'AGE_UP_ASYNC' });
}

export function* watchAgeUp() {
  yield takeLatest('AGE_UP', ageUpAsync);
}
