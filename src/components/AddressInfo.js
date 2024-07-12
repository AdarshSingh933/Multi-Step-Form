import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateFormData } from '../redux/actions/formActions';
import { validateAddressInfo } from '../utils/validation';

const AddressInfo = () => {
  const dispatch = useDispatch();
  const formData = useSelector(state => state.form);
  const { address1, address2, city, state, zip } = formData;
  const errors = validateAddressInfo(formData);

  const handleChange = (e) => {
    dispatch(updateFormData({ [e.target.name]: e.target.value }));
  };

  return (
    <div>
      <h2>Address Information</h2>
      <form>
        <div>
          <label>Address Line 1</label>
          <input type="text" name="address1" value={address1} onChange={handleChange} />
          {errors.address1 && <span className="error">{errors.address1}</span>}
        </div>
        <div>
          <label>Address Line 2</label>
          <input type="text" name="address2" value={address2} onChange={handleChange} />
        </div>
        <div>
          <label>City</label>
          <input type="text" name="city" value={city} onChange={handleChange} />
          {errors.city && <span className="error">{errors.city}</span>}
        </div>
        <div>
          <label>State</label>
          <input type="text" name="state" value={state} onChange={handleChange} />
          {errors.state && <span className="error">{errors.state}</span>}
        </div>
        <div>
          <label>Zip Code</label>
          <input type="text" name="zip" value={zip} onChange={handleChange} />
          {errors.zip && <span className="error">{errors.zip}</span>}
        </div>
      </form>
    </div>
  );
};

export default AddressInfo;
