import { combineReducers } from 'redux';

const fetchRuleStatus = (state = 'notLoaded', action) => {
  switch (action.type) {
    case 'rule/FETCH_REQUEST': {
      return 'initState';
    }
    case 'rule/FETCH_FAILURE': {
      return 'failedState';
    }
    case 'rule/FETCH_SUCCESS': {
      return 'succeedState';
    }
    default:
      return state;
  }
};

const rule = (state = [], { type, payload }) => {
  switch (type) {
    case 'rule/FETCH_SUCCESS': {
      return payload;
    }
    default:
      return state;
  }
};

export default combineReducers({
  fetchRuleStatus,
  rule
});
