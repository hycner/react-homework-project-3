// @flow
import React, {PureComponent} from 'react';
import styled from 'styled-components';

import walmartImg from '../../img/walmart-global-travel.png';
import walmartImg2x from '../../img/walmart-global-travel@2x.png';
import walmartImg3x from '../../img/walmart-global-travel@3x.png';

type TProps = {

};

const Wrap = styled.div`
  display: flex;
  align-items: center;
  height: 66px;
`;
const Search = styled.a`
  width: 90px;
  height: 18px;
  font-family: Avenir;
  font-size: 13px;
  font-weight: 900;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: 0.2px;
  text-align: left;
  color: #ff9f00;
`;
const Trip = styled.a`
  width: 127px;
  height: 18px;
  font-family: Avenir;
  font-size: 13px;
  font-weight: 500;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: 0.2px;
  text-align: left;
  color: #3c3c3c;  
`;
const Account = styled.a`
  margin-left: auto;
  width: 74px;
  height: 18px;
  font-family: Avenir;
  font-size: 13px;
  font-weight: 500;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: 0.2px;
  text-align: left;
  color: #3c3c3c; 
`;


export default class Header extends PureComponent<TProps> {
  render() {
    return (
      <Wrap>
        <img
          src={walmartImg}
          srcSet={`${walmartImg2x} 2x, ${walmartImg3x} 3x`}
        />
        <Search href="#search">New Search</Search>
        <Trip>Add to Existing Trip</Trip>
        <Account>My Account</Account>
      </Wrap>
    );
  }
}
