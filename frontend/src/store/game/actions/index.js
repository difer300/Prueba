// Actions for create a game
export const create = game => ({ type: 'game/CREATE', payload: game });
export const createRequest = () => ({ type: 'game/CREATE_REQUEST' });
export const createSuccess = game => ({
  type: 'game/CREATE_SUCCESS',
  payload: game
});
export const createFailure = error => ({
  type: 'game/CREATE_FAILURE',
  payload: { error }
});

// Actions for update a game
export const update = game => ({ type: 'game/UPDATE', payload: game });
export const updateRequest = () => ({ type: 'game/UPDATE_REQUEST' });
export const updateSuccess = game => ({
  type: 'game/UPDATE_SUCCESS',
  payload: game
});
export const updateFailure = error => ({
  type: 'game/UPDATE_FAILURE',
  payload: { error }
});

// Actions for fetch all game
export const fetch = game => ({ type: 'game/FETCH' });
export const fetchRequest = () => ({ type: 'game/FETCH_REQUEST' });
export const fetchSuccess = game => ({
  type: 'game/FETCH_SUCCESS',
  payload: game
});
export const fetchFailure = error => ({
  type: 'game/FETCH_FAILURE',
  payload: { error }
});

//Clear State
export const clear = () => ({ type: 'game/CLEAR' });
