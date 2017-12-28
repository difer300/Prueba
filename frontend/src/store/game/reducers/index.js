import { combineReducers } from 'redux';

const createGameStatus = (state = 'notLoaded', action) => {
  switch (action.type) {
    case 'game/CREATE_REQUEST': {
    return 'initState';
    }
    case 'game/CREATE_FAILURE': {
      return 'failedState';
    }
    case 'game/CREATE_SUCCESS': {
    return 'succeedState';
    }
    case 'game/CLEAR': {
      return 'notLoaded';
    }
    default:
      return state;
  }
};

const updateGametatus = (state = 'notLoaded', action) => {
  switch (action.type) {
    case 'game/UPDATE_REQUEST': {
      return 'initState';
    }
    case 'game/UPDATE_FAILURE': {
    return 'failedState';
    }
    case 'game/UPDATE_SUCCESS': {
      return 'succeedState';
    }
    default:
      return state;
  }
};

const fetchGameStatus = (state = 'notLoaded', action) => {
  switch (action.type) {
    case 'game/FETCH_REQUEST': {
      return 'initState';
    }
    case 'game/FETCH_FAILURE': {
      return 'failedState';
    }
    case 'game/FETCH_SUCCESS': {
      return 'succeedState';
    }
    default:
      return state;
  }
};

const game = (state = [], { type, payload }) => {
  switch (type) {
    case 'game/FETCH_SUCCESS': {
      return payload;
    }
    case 'game/UPDATE_SUCCESS': {
      return state.map(
        game => (game._id === payload._id ? payload : game)
      );
    }
    case 'game/CREATE_SUCCESS': {
      return [...state, ...payload];
    }
    default:
      return state;
  }
};

const activeGame = (state = [], { type, payload }) => {
  switch (type) {
    case 'game/CREATE_SUCCESS': {
      return payload;
    }
    case 'game/UPDATE_SUCCESS': {
      console.log(payload)
      return state.map(
        game => (game._id === payload._id ? payload : game)
      );
    }
    case 'game/CLEAR': {
      return [];
    }
    default:
      return state;
  }
};

export default combineReducers({
  createGameStatus,
  updateGametatus,
  fetchGameStatus,
  game,
  activeGame
});
