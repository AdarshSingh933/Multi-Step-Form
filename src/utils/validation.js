export const validatePersonalInfo = (formData) => {
  const errors = {};
  if (!formData.name) errors.name = 'Name is required';
  if (!formData.email) errors.email = 'Email is required';
  else if (!/\S+@\S+\.\S+/.test(formData.email)) errors.email = 'Email is invalid';
  if (!formData.phone) errors.phone = 'Phone number is required';
  else if (!/^\d{10}$/.test(formData.phone)) errors.phone = 'Phone number must be 10 digits';
  return errors;
};

export const validateAddressInfo = (formData) => {
  const errors = {};
  if (!formData.address1) errors.address1 = 'Address Line 1 is required';
  if (!formData.city) errors.city = 'City is required';
  if (!formData.state) errors.state = 'State is required';
  if (!formData.zip) errors.zip = 'Zip Code is required';
  else if (!/^\d{5}$/.test(formData.zip)) errors.zip = 'Zip Code must be 5 digits';
  return errors;
};
