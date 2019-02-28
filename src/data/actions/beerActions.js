import { LOAD_BEER_REQUEST, LOAD_BEER_SUCCESS, LOAD_BEER_FAILURE } from '../constants';

export function loadBeers() {
  return dispatch => fetch(`https://api.punkapi.com/v2/`)
    .then(res => res.json())
    .then(
      data => dispatch({ type: LOAD_BEER_SUCCESS, data }),
      error => dispatch({ type: LOAD_BEER_FAILURE, error })
    );
}