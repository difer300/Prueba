// Actions for fetch all rule
export const fetch = rule => ({ type: 'rule/FETCH' });
export const fetchRequest = () => ({ type: 'rule/FETCH_REQUEST' });
export const fetchSuccess = rule => ({
  type: 'rule/FETCH_SUCCESS',
  payload: rule
});
export const fetchFailure = error => ({
  type: 'rule/FETCH_FAILURE',
  payload: { error }
});

//Clear State
export const clear = () => ({ type: 'rule/CLEAR' });
