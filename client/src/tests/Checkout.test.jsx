import React from 'react';
import { shallow } from 'enzyme';
import Checkout from '../components/Checkout.jsx';

describe('Checkout Test', () => {
  it('1+1 Should equal 2', () => {
    const wrapper = shallow(<Checkout />)
    expect(true).toBeTruthy()
  });
});