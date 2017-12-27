import { takeLatest } from 'redux-saga/effects';

import createGame from './createGame';
import updateGame from './updateGame';
import fetchGame from './fetchGame';

export default function* root() {
  yield takeLatest('game/CREATE', createGame);
  yield takeLatest('game/UPDATE', updateGame);
  yield takeLatest('game/FETCH', fetchGame);
}
