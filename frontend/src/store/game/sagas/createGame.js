import { call, put } from 'redux-saga/effects';

import { apiGame } from '../../../api';
import * as actions from '../actions';

export default function* createGame({ payload }) {
  yield put(actions.createRequest());
  try {
    const response = yield call(apiGame.createGame, {
      game: payload
    });
    yield put(actions.createSuccess(response.data));
  } catch (error) {
    yield put(actions.createFailure({ error: error.toString() }));
  }
}
