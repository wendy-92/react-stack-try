import { take, takeEvery } from 'redux-saga/effects';

export default function* watchAndLog() {
  yield* takeEvery('*', function* logger(action){
    console.log(action);
  });
}