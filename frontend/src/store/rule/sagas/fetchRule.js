import { call, put } from 'redux-saga/effects';

import { apiRule } from '../../../api';
import * as actions from '../actions';

export default function* fetchRule() {
  yield put(actions.fetchRequest());
  try {
    const response = yield call(apiRule.getRules);
    yield put(actions.fetchSuccess(response.data.rules));
  } catch (error) {
    yield put(actions.fetchFailure({ error: error.toString() }));
  }
}
