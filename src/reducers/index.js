// @flow
import {combineReducers} from 'redux';

import type {TStateFlights} from './flights';
import flights from './flights';

export default combineReducers({
  flights,
});

export type TState = {
  flights: TStateFlights,
};
