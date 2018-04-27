// @flow
import React, {PureComponent} from 'react';
import styled from 'styled-components';

import walmartLogoImg from '../../../img/walmart-logo-png-1.png';
import walmartLogoImg2x from '../../../img/walmart-logo-png-1@2x.png';
import walmartLogoImg3x from '../../../img/walmart-logo-png-1@3x.png';

type TProps = {

};

const Wrap = styled.div`
  margin-top: 58px;
  display: flex;
  justify-content: center;
`;
const WalmartLogo = styled.img`
  width: 39px;
  height: 43px;
  object-fit: contain;
  background-color: #ffffff;  
`;
const Text = styled.div`
  width: 517px;
  height: 45px;
  font-family: Avenir;
  font-size: 33px;
  font-weight: 900;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: 0.5px;
  text-align: center;
  color: #ffc100;  
`;

export default class Header extends PureComponent<TProps> {
  render() {
    return (
      <Wrap>
        <WalmartLogo
          src={walmartLogoImg}
          srcSet={`${walmartLogoImg2x} 2x, ${walmartLogoImg3x} 3x`}
        />
        <Text>
          Plan your smartest business trip
        </Text>
      </Wrap>
    );
  }
}
