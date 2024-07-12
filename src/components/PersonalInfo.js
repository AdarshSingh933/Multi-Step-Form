import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateFormData } from '../redux/actions/formActions';
import { validatePersonalInfo } from '../utils/validation';

const PersonalInfo = () => {
  const dispatch = useDispatch();
  const formData = useSelector(state => state.form);
  const { name, email, phone } = formData;
  const errors = validatePersonalInfo(formData);

  const handleChange = (e) => {
    dispatch(updateFormData({ [e.target.name]: e.target.value }));
  };

  return (
    <div>
      <h2>Personal Information</h2>
      <form>
        <div>
          <label>Name</label>
          <input type="text" name="name" value={name} onChange={handleChange} />
          {errors.name && <span className="error">{errors.name}</span>}
        </div>
        <div>
          <label>Email</label>
          <input type="email" name="email" value={email} onChange={handleChange} />
          {errors.email && <span className="error">{errors.email}</span>}
        </div>
        <div>
          <label>Phone</label>
          <input type="tel" name="phone" value={phone} onChange={handleChange} />
          {errors.phone && <span className="error">{errors.phone}</span>}
        </div>
      </form>
    </div>
  );
};

export default PersonalInfo;
