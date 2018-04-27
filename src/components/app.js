// @flow
import React, {PureComponent} from 'react';
import {connect} from 'react-redux';

import type {TState} from '../reducers';
import type {TStateFlights} from '../reducers/flights';
import {dispatch} from '../store';
import {getFlights} from '../actions/flights';

import Flight from './app/flight';

type TProps = {
  flights: TStateFlights,
};

class App extends PureComponent<TProps> {
  componentDidMount() {
    dispatch(getFlights());
  }

  render() {
    return (
      <div>
        {this.props.flights.map((x, i) => {
          return <Flight flight={x} key={i} />;
        })}
      </div>
    );
  }
}

function mapStateToProps(state: TState) {
  return {
    flights: state.flights,
  };
}

export default connect(mapStateToProps)(App);
