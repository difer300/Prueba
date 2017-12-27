import { all, fork } from 'redux-saga/effects';
import { rootSaga as rule } from './rule';
import { rootSaga as game } from './game';

export default function* rootSaga() {
  yield all([fork(rule)]);
  yield all([fork(game)]);
}
