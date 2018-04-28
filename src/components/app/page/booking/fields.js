// @flow
import React, {PureComponent} from 'react';
import styled from 'styled-components';
import { Radio } from 'antd';

type TFlightType = 'round' | 'oneway' | 'multi';
type TState = {
  flight: {
    type: TFlightType
  }
};
type TProps = {

};

const Wrap = styled.div`
  padding: 36px 61px;
  background-color: #f4f5f6;
`;

export default class Fields extends PureComponent<TProps, TState> {
  state = {
    flight: {
      type: 'round'
    }
  };

  setFlightType = (e: any) => {
    let flightType: TFlightType = e.target.value;

    this.setState({
      flight: {
        ...this.state.flight,
        type: flightType
      }
    });
  };

  render() {
    return (
      <Wrap>
        <div>
          <Radio.Group
            onChange={this.setFlightType}
            value={this.state.flight.type}
          >
            <Radio value="round">
              Roundtrip
            </Radio>
            <Radio value="oneway">
              One-way
            </Radio>
            <Radio value="multi">
              Multi-city
            </Radio>
          </Radio.Group>
        </div>
      </Wrap>
    );
  }
}
