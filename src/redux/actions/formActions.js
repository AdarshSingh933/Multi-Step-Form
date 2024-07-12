// src/redux/actions/formActions.js
export const UPDATE_FORM_DATA = 'UPDATE_FORM_DATA';
export const NEXT_STEP = 'NEXT_STEP';
export const PREV_STEP = 'PREV_STEP';
export const LOAD_FORM_DATA = 'LOAD_FORM_DATA';
export const SUBMIT_FORM = 'SUBMIT_FORM';

export const updateFormData = (data) => ({
  type: UPDATE_FORM_DATA,
  payload: data
});

export const nextStep = () => ({
  type: NEXT_STEP
});

export const prevStep = () => ({
  type: PREV_STEP
});

export const loadFormData = (data) => ({
  type: LOAD_FORM_DATA,
  payload: data
});

export const submitForm = (data) => {
  return (dispatch) => {
    setTimeout(() => {
      if (Math.random() < 0.8) {  // Simulate success 80% of the time
        dispatch({ type: SUBMIT_FORM, payload: data });
        alert('Form submitted successfully!');
      } else {
        alert('Failed to submit form. Please try again.');
      }
    }, 1000);
  };
};
