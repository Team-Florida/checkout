import React from 'react';
import { mount } from 'enzyme';
import PricePerNightInfo from '../components/PricePerNightInfo.jsx'
import PricePerNightInfoWrapper from '../styles/PricePerNightInfo/PricePerNightInfoWrapper.js';
import Price from '../styles/PricePerNightInfo/Price.js';

import StarInfo from '../components/StarInfo.jsx'
import Stars from '../styles/StarInfo/Stars.js'
import Reviews from '../styles/StarInfo/Reviews.js'

describe('Header Star Information Should Render', () => {
  it('It should display the correct star average to the user', () => {
    const wrapper = mount(<StarInfo numberOfReviews = {100} starReviewTotal = {4.8898} />)
    expect(wrapper.find(Stars).text()).toEqual('4.89')
  });
  it('It should display the correct total ratings to the user', () => {
    const wrapper = mount(<StarInfo numberOfReviews = {100} starReviewTotal = {4.8898} />)
    expect(wrapper.find(Reviews).text()).toEqual('  (100 reviews)')
  });
});