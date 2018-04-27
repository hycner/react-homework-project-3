// @flow
import type {TStateFlights} from '../reducers/flights';
import {GET_FLIGHTS} from './_actionTypes';
import flightData from './_flightData';

export type TGetFlightsAction = {
  type: 'GET_FLIGHTS',
  payload: TStateFlights,
};

export function getFlights(): TGetFlightsAction {
  return {
    type: GET_FLIGHTS,
    payload: flightData,
  };
}
