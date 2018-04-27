// @flow
import React, {PureComponent} from 'react';
import styled from 'styled-components';

import type {TFlight} from '../../../reducers/flights';
import {getCarrierIcon, getCarrierName} from '../../../util';

type TProps = {
  flight: TFlight,
};

const Wrap = styled.div`
  text-align: center;
`;
const Img = styled.img`
  margin: 20px 20px 0 20px;
  border: 1px solid black;
  width: 100px;
  height: 100px;
`;
const Name = styled.div`
  margin: 10px 0;
  font-size: 18px;
`;

export default class Carrier extends PureComponent<TProps> {
  render() {
    let {flight} = this.props;
    let name = getCarrierName(flight.carrier);
    let icon = getCarrierIcon(flight.carrier);

    return (
      <Wrap>
        <Img src={icon} alt={flight.carrier} />
        <Name>{name}</Name>
      </Wrap>
    );
  }
}
