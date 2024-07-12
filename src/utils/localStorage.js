const FORM_DATA_KEY = 'formData';

export const saveToLocalStorage = (data) => {
  localStorage.setItem(FORM_DATA_KEY, JSON.stringify(data));
};

export const getFromLocalStorage = () => {
  const data = localStorage.getItem(FORM_DATA_KEY);
  return data ? JSON.parse(data) : null;
};
