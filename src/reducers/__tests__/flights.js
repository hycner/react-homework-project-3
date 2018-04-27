import flights, {initialState} from '../flights';
import {GET_FLIGHTS} from '../../actions/_actionTypes';

describe('Reducers: flights', () => {
  it('should return the initial state', () => {
    expect(flights(undefined, {})).toEqual(initialState);
  });

  describe('GET_FLIGHTS', () => {
    let payload = [
      {
        test: 1,
      },
    ];
    let action = {
      type: GET_FLIGHTS,
      payload,
    };

    it('should integrate into state', () => {
      expect(flights(undefined, action)).toEqual(payload);
    });

    it('should not mutate state', () => {
      let originalState = flights(undefined, {});
      let newState = flights(originalState, action);

      expect(newState).not.toBe(originalState);
    });
  });
});
