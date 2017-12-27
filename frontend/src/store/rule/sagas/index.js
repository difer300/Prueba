import { takeLatest } from 'redux-saga/effects';

import fetchRule from './fetchRule';

export default function* root() {
  yield takeLatest('rule/FETCH', fetchRule);
}
