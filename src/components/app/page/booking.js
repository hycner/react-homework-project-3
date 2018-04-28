// @flow
import React, {PureComponent} from 'react';
import styled from 'styled-components';

import Navigation from './booking/navigation';
import Fields from './booking/fields';

type TProps = {

};

const Wrap = styled.div`
  margin: 0 auto;
  width: 798px;
  height: 382px;
`;

export default class Booking extends PureComponent<TProps> {
  render() {
    return (
      <Wrap>
        <Navigation />
        <Fields />
      </Wrap>
    );
  }
}
