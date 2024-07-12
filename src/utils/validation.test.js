// src/utils/validation.test.js
const { validatePersonalInfo, validateAddressInfo } = require('./validation');


test('validatePersonalInfo returns errors for empty fields', () => {
  const formData = { name: '', email: '', phone: '' };
  const errors = validatePersonalInfo(formData);
  expect(errors).toEqual({
    name: 'Name is required',
    email: 'Email is required',
    phone: 'Phone number is required'
  });
});

test('validatePersonalInfo returns error for invalid email', () => {
  const formData = { name: 'John', email: 'invalid-email', phone: '1234567890' };
  const errors = validatePersonalInfo(formData);
  expect(errors).toEqual({
    email: 'Email is invalid'
  });
});

test('validateAddressInfo returns errors for empty required fields', () => {
  const formData = { address1: '', city: '', state: '', zip: '' };
  const errors = validateAddressInfo(formData);
  expect(errors).toEqual({
    address1: 'Address Line 1 is required',
    city: 'City is required',
    state: 'State is required',
    zip: 'Zip Code is required'
  });
});

test('validateAddressInfo returns error for invalid zip code', () => {
  const formData = { address1: '123 Main St', city: 'City', state: 'State', zip: '123' };
  const errors = validateAddressInfo(formData);
  expect(errors).toEqual({
    zip: 'Zip Code must be 5 digits'
  });
});
