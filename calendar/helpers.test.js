import React from 'react';
import helpers from './helpers.js'

let calendar

beforeEach(() => {
    calendar = helpers.generateCalendar();
  });

describe('Validate Calendar Helper Functions', () => {
  it('generateCalendar should generate a calendar as expected', () => {
    // const calendar = helpers.generateCalendar()
    expect(calendar['2020']['9']['26']).toBeTruthy()
    expect(calendar['2020']['9']['27']).toBeFalsy()
  });
});


describe('Validate Book Days Helper Function', () => {
    it('bookDays should book 01/21/2020 on the calendar', () => {
      // const calendar = helpers.generateCalendar()
      const bookedDays = {}
      bookedDays['01/01/2020'] = true
      helpers.bookDays(calendar, bookedDays)
      expect(calendar['2020']['0'].calendar['0']['3'].isBooked).toEqual(true)
    });
  });

  describe('Validate Flatten Calendar Helper Function', () => {
    it('FlattenCalendar Should flatten the calendar', () => {
      // const calendar = helpers.generateCalendar()
      const bookedDays = {}
      bookedDays['01/01/2020'] = true
      helpers.bookDays(calendar, bookedDays)
      const flattenedCalendar = helpers.flattenCalendar(calendar)

      expect(flattenedCalendar.length).toEqual(10)
      expect(Object.keys(flattenedCalendar[0]).length).toEqual(3)
      expect(flattenedCalendar[0].calendar['0']['3'].isBooked).toEqual(true)
    });
  });
