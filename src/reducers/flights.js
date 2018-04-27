// @flow
import type {TAction} from '../actions/_actionTypes';
import Immutable from 'seamless-immutable';

import {GET_FLIGHTS} from '../actions/_actionTypes';

export type TFlight = {
  +departureTime: string,
  +arrivalTime: string,
  +carrier: string,
  +origin: string,
  +destination: string,
};

export type TStateFlights = TFlight[];

export const initialState: TStateFlights = [];

export default (state: TStateFlights = initialState, action: TAction): TStateFlights => {
  switch (action.type) {
    case GET_FLIGHTS:
      return Immutable(action.payload);
    default:
      return state;
  }
};
