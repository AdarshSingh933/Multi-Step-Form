import { UPDATE_FORM_DATA, NEXT_STEP, PREV_STEP, LOAD_FORM_DATA, SUBMIT_FORM } from '../actions/formActions';

const initialState = {
  step: 1,
  name: '',
  email: '',
  phone: '',
  address1: '',
  address2: '',
  city: '',
  state: '',
  zip: ''
};

const formReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_FORM_DATA:
      return {
        ...state,
        ...action.payload
      };
    case NEXT_STEP:
      return {
        ...state,
        step: state.step + 1
      };
    case PREV_STEP:
      return {
        ...state,
        step: state.step - 1
      };
    case LOAD_FORM_DATA:
      return {
        ...state,
        ...action.payload
      };
    case SUBMIT_FORM:
      // In real application, handle form submission (e.g., API call) here
      return state;
    default:
      return state;
  }
};

export default formReducer;
