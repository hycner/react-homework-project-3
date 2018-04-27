// @flow
import React, {PureComponent} from 'react';
import styled from 'styled-components';

import Header from './page/header';
import Whom from './page/whom';
import bgImg from '../../img/tommy-343498-unsplash.png';

export type TWhom = 'me' | 'ya mum';
type TState = {
  whom: TWhom
};
type TProps = {

};

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  background-image: url(${bgImg});
  background-size: cover;
  height: 100%;
`;

export default class Page extends PureComponent<TProps, TState> {
  state = {
    whom: 'me'
  };

  setWhom = (whom: TWhom) => {
    this.setState({whom});
  };

  render() {
    return (
      <Wrap>
        <Header />
        <Whom
          setWhom={this.setWhom}
        />
        <div>x</div>
      </Wrap>
    );
  }
}
