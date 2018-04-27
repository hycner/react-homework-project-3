// @flow
import React, {PureComponent} from 'react';
import styled from 'styled-components';

import personImg from '../../../img/person-outline-icon-png-person-outline-icon-png-person-17.png';
import personImg2x from '../../../img/person-outline-icon-png-person-outline-icon-png-person-17@2x.png';
import personImg3x from '../../../img/person-outline-icon-png-person-outline-icon-png-person-17@3x.png';
import type {TWhom} from '../page';

type TProps = {
  setWhom: (TWhom) => void;
};

const Wrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 31px 0 38px 27px;
`;
const Text = styled.div`
  width: 252px;
  height: 22px;
  font-family: Avenir;
  font-size: 16px;
  font-weight: 500;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: 0.2px;
  text-align: left;
  color: #ffffff;  
`;
const Dropdown = styled.div`
  width: 238px;
  height: 36px;
  box-shadow: inset 0 1px 3px 0 rgba(156, 156, 156, 0.5);
  border: solid 1px #ffc100;
`;

// todo: make this a real dropdown
export default class Whom extends PureComponent<TProps> {
  render() {
    return (
      <Wrap>
        <Text>Who are you booking a trip for?</Text>
        <Dropdown>
          <img
            src={personImg}
            srcSet={`${personImg2x} 2x, ${personImg3x} 3x`}
          />
        </Dropdown>
      </Wrap>
    );
  }
}
