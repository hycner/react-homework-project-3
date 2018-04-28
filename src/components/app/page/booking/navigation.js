// @flow
import React, {PureComponent} from 'react';
import styled, {css} from 'styled-components';

import Section from './navigation/section';

export type TSelected = 'flight' | 'hotel' | 'car';
type TState = {
  selected: TSelected
};
type TProps = {

};

const Wrap = styled.div`
  display: flex;
`;

const sections = ['flight', 'hotel', 'car'];

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
        {sections.map(section => (
          <Section
            key={section}
            active={this.state.selected === section}
            section={section}
            setSelected={this.setSelected}
          />
        ))}
      </Wrap>
    );
  }
}
