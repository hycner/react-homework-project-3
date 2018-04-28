// @flow
import React, {PureComponent} from 'react';
import styled, {css} from 'styled-components';

import flightImg from '../../../../../img/airplane-512-px-grey.png';
import flightImg2x from '../../../../../img/airplane-512-px-grey@2x.png';
import flightImg3x from '../../../../../img/airplane-512-px-grey@3x.png';
import hotelImg from '../../../../../img/city-hotel-icon.png';
import hotelImg2x from '../../../../../img/city-hotel-icon@2x.png';
import hotelImg3x from '../../../../../img/city-hotel-icon@3x.png';
import carImg from '../../../../../img/996-200.png';
import carImg2x from '../../../../../img/996-200@2x.png';
import carImg3x from '../../../../../img/996-200@3x.png';

import type {TSelected} from '../navigation';

type TProps = {
  active: boolean,
  section: TSelected,
  setSelected: (TSelected) => void
};

const sections = {
  flight: {
    x1: flightImg,
    x2: flightImg2x,
    x3: flightImg3x,
  },
  hotel: {
    x1: hotelImg,
    x2: hotelImg2x,
    x3: hotelImg3x,
  },
  car: {
    x1: carImg,
    x2: carImg2x,
    x3: carImg3x,
  }
};

const Wrap = styled.div`
  width: 213px;
  
  ${props => props.active && css`
    background-color: #ffc100;
  `}
  ${props => !props.active && css`
    background-color: #f4f5f6;
  `}
`;

export default class Section extends PureComponent<TProps> {
  handleClick = () => {
    this.props.setSelected(this.props.section);
  };

  render() {
    const imgs = sections[this.props.section];

    return (
      <Wrap
        onClick={this.handleClick}
        active={this.props.active}
      >
        <img
          src={imgs.x1}
          srcSet={`${imgs.x2} 2x, ${imgs.x3} 3x`}
        />
      </Wrap>
    );
  }
}
