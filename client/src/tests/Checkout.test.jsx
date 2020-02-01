import React from 'react';
import { shallow } from 'enzyme';
import Checkout from '../components/Checkout.jsx';

import Header from '../components/Header.jsx'
import BookItForm from '../components/BookItForm.jsx'
import Footer from '../components/Footer.jsx'

describe('Header Price Information Should Render', () => {
  it('It should mount the Header', () => {
    const wrapper = shallow(<Checkout />)
    expect(wrapper.find(Header)).toHaveLength(1)
  });
  it('It should mount the BookItForm', () => {
    const wrapper = shallow(<Checkout />)
    expect(wrapper.find(BookItForm)).toHaveLength(1)
  });
  it('It should mount the Footer', () => {
    const wrapper = shallow(<Checkout />)
    expect(wrapper.find(Footer)).toHaveLength(1)
  });
});