// @flow
import React, {PureComponent} from 'react';
import styled, {css} from 'styled-components';

import flightImg from '../../../../img/airplane-512-px-grey.png';
import flightImg2x from '../../../../img/airplane-512-px-grey@2x.png';
import flightImg3x from '../../../../img/airplane-512-px-grey@3x.png';
import hotelImg from '../../../../img/city-hotel-icon.png';
import hotelImg2x from '../../../../img/city-hotel-icon@2x.png';
import hotelImg3x from '../../../../img/city-hotel-icon@3x.png';
import carImg from '../../../../img/996-200.png';
import carImg2x from '../../../../img/996-200@2x.png';
import carImg3x from '../../../../img/996-200@3x.png';

type TSelected = 'flight' | 'hotel' | 'car';
type TState = {
  selected: TSelected
};
type TProps = {

};

const Wrap = styled.div`
  display: flex;
`;
const Section = styled.div`
  width: 213px;
  
  ${props => props.active && css`
    background-color: #ffc100;
  `}
  ${props => !props.active && css`
    background-color: #f4f5f6;
  `}
`;

export default class Navigation extends PureComponent<TProps, TState> {
  state = {
    selected: 'flight'
  };

  setSelected = (selected: TSelected) => {
    this.setState({selected});
  };

  render() {
    return (
      <Wrap>
        <Section
          onClick={() => this.setSelected('flight')}
          active={this.state.selected === 'flight'}
        >
          <img
            src={flightImg}
            srcSet={`${flightImg2x} 2x, ${flightImg3x} 3x`}
          />
        </Section>
        <Section
          onClick={() => this.setSelected('hotel')}
          active={this.state.selected === 'hotel'}
        >
          <img
            src={hotelImg}
            srcSet={`${hotelImg2x} 2x, ${hotelImg3x} 3x`}
          />
        </Section>
        <Section
          onClick={() => this.setSelected('car')}
          active={this.state.selected === 'car'}
        >
          <img
            src={carImg}
            srcSet={`${carImg2x} 2x, ${carImg3x} 3x`}
          />
        </Section>
      </Wrap>
    );
  }
}
