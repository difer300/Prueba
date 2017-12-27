import { combineReducers } from 'redux';
import { rootReducer as rule } from './rule';
import { rootReducer as game } from './game';

export default combineReducers({
  rule,
  game
});
