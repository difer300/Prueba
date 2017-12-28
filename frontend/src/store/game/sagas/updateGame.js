import { call, put } from 'redux-saga/effects';

import { apiGame } from '../../../api';
import * as actions from '../actions';

export default function* updateGame({ payload }) {
  yield put(actions.updateRequest());
  try {
    const response = yield call(apiGame.updateGame, {
      game: payload
    });
    console.log(response)
    yield put(actions.updateSuccess(response.data.game));
  } catch (error) {
    yield put(actions.updateFailure({ error: error.toString() }));
  }
}
