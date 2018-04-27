// @flow
import React, {PureComponent} from 'react';
import styled from 'styled-components';

import type {TFlight} from '../../reducers/flights';

import Airports from './flight/airports';
import Carrier from './flight/carrier';

type TProps = {
  flight: TFlight,
};

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px;
  border: 1px solid black;
  background-color: #cee0f0;

  @media (min-width: 575px) {
    flex-direction: row;
  }
`;

export default class Flight extends PureComponent<TProps> {
  render() {
    return (
      <Wrap>
        <Carrier flight={this.props.flight} />
        <Airports flight={this.props.flight} />
      </Wrap>
    );
  }
}
