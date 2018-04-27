// @flow
import React, {PureComponent} from 'react';
import styled from 'styled-components';

import type {TFlight} from '../../../reducers/flights';

type TProps = {
  flight: TFlight,
};

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  @media (min-width: 575px) {
    flex-direction: row;
  }
`;
const Airport = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  @media (min-width: 575px) {
    width: 50%;
  }
`;
const Name = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  font-size: 80px;
`;
const Time = styled.div`
  margin-bottom: 5px;
  text-align: center;
  font-size: 18px;
`;

export default class Airports extends PureComponent<TProps> {
  render() {
    let {flight} = this.props;

    let departure = new Date(flight.departureTime).toLocaleString();
    let arrival = new Date(flight.arrivalTime).toLocaleString();

    return (
      <Wrap>
        <Airport>
          <Name>{flight.origin}</Name>
          <Time>{departure}</Time>
        </Airport>

        <Airport>
          <Name>{flight.destination}</Name>
          <Time>{arrival}</Time>
        </Airport>
      </Wrap>
    );
  }
}
