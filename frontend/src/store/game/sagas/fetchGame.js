import { call, put } from 'redux-saga/effects';

import { apiGame } from '../../../api';
import * as actions from '../actions';

export default function* fetchGame() {
  yield put(actions.fetchRequest());
  try {
    const response = yield call(apiGame.getAllGames);
    yield put(actions.fetchSuccess(response.data));
  } catch (error) {
    yield put(actions.fetchFailure({ error: error.toString() }));
  }
}
