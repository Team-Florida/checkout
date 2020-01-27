import React from 'react';
import { mount } from 'enzyme';
import PricePerNightInfo from '../components/PricePerNightInfo.jsx'
//import 'jest-styled-components'
import PricePerNightInfoWrapper from '../styles/PricePerNightInfo/PricePerNightInfoWrapper.jsx';

describe('PricePerNightInfo Rending', () => {
  it('It should display the correct price to the user', () => {
    const wrapper = mount(<PricePerNightInfo pricePerNight = {70} />)
    expect(wrapper.find(PricePerNightInfoWrapper).text()).toEqual('$70')
  });
});