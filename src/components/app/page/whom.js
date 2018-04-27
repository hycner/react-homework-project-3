// @flow
import React, {PureComponent} from 'react';
import styled from 'styled-components';

type TProps = {
  setWhom: () => void;
};

const Wrap = styled.div`
  
`;

export default class Whom extends PureComponent<TProps> {
  render() {
    return (
      <Wrap>
        Who are you booking a trip for?
      </Wrap>
    );
  }
}
