// @flow
import React, {PureComponent} from 'react';

import Header from './app/header';
import Page from './app/page';
import styled from 'styled-components';

type TProps = {

};

const Wrap = styled.div`
  display: flex;
  flex-direction: column; 
  height: 100vh;
`;

export default class App extends PureComponent<TProps> {
  render() {
    return (
      <Wrap>
        <Header />
        <Page />
      </Wrap>
    );
  }
}
