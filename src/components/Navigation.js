import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { nextStep, prevStep, submitForm } from '../redux/actions/formActions';
import { validatePersonalInfo, validateAddressInfo } from '../utils/validation';

const Navigation = () => {
  const dispatch = useDispatch();
  const step = useSelector(state => state.form.step);
  const formData = useSelector(state => state.form);

  const isPersonalInfoValid = Object.keys(validatePersonalInfo(formData)).length === 0;
  const isAddressInfoValid = Object.keys(validateAddressInfo(formData)).length === 0;

  const handleNext = () => dispatch(nextStep());
  const handlePrev = () => dispatch(prevStep());
  const handleSubmit = () => {
    dispatch(submitForm(formData));
    alert('Form submitted!');
  };

  return (
    <div className="navigation">
      {step > 1 && <button onClick={handlePrev}>Back</button>}
      {step < 3 && <button onClick={handleNext} disabled={step === 1 ? !isPersonalInfoValid : !isAddressInfoValid}>Next</button>}
      {step === 3 && <button onClick={handleSubmit}>Submit</button>}
    </div>
  );
};

export default Navigation;
