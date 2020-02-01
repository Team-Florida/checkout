import React from 'react';
import { mount } from 'enzyme';
import GuestIncrementer from '../components/GuestIncrementer.jsx'
import PricePerNightInfoWrapper from '../styles/PricePerNightInfo/PricePerNightInfoWrapper.js';
import Price from '../styles/PricePerNightInfo/Price.js';

import IncrementerButton from '../styles/GuestIncrementer/IncrementerButton.js'
import GuestIncrementerWrapper from '../styles/GuestIncrementer/GuestIncrementerWrapper.js';

describe('Guest Incrementer Unit Tests', () => {
  it('The component Should have a wrapper as the first child', () => {
    //const wrapper = mount(<GuestIncrementer/>)
    const guestsBooked = {
        adult: 1, 
        child: 0,
        infant: 0
    }
    const guestsAllowed = {
        adult: 5,
        child: 2,
        infant: 5
    }
    const current = 'adult'
    const changeGuests = () => {}
    const wrapper = mount(<GuestIncrementerWrapper guestsBooked = {guestsBooked} guestsAllowed = {guestsAllowed} current = {current} changeGuests = {changeGuests} />)
    console.log(wrapper.children().debug())
    expect(wrapper.find(GuestIncrementerWrapper)).toHaveLength(1);
  });
})