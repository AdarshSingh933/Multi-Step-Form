import React from 'react';
import { useSelector } from 'react-redux';

const Confirmation = () => {
  const formData = useSelector(state => state.form);
  const { name, email, phone, address1, address2, city, state, zip } = formData;

  return (
    <div>
      <h2>Confirmation</h2>
      <ul>
        <li><strong>Name:</strong> {name}</li>
        <li><strong>Email:</strong> {email}</li>
        <li><strong>Phone:</strong> {phone}</li>
        <li><strong>Address Line 1:</strong> {address1}</li>
        <li><strong>Address Line 2:</strong> {address2}</li>
        <li><strong>City:</strong> {city}</li>
        <li><strong>State:</strong> {state}</li>
        <li><strong>Zip Code:</strong> {zip}</li>
      </ul>
    </div>
  );
};

export default Confirmation;
