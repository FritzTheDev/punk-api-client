const initialState = { beers:[], loading: false, error: null };
import { LOAD_BEER_REQUEST, LOAD_BEER_SUCCESS, LOAD_BEER_FAILURE} from '../constants/index';

export default function beerReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_BEER_REQUEST:
      return {
        ...state,
        loading: true
      };
    case LOAD_BEER_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        beers: action.payload
      };
    case LOAD_BEER_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        beers: []
      }
    default:
      return state;
  }
}