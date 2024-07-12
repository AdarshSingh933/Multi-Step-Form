import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadFormData, updateFormData } from '../redux/actions/formActions';
import { saveToLocalStorage, getFromLocalStorage } from '../utils/localStorage';
import PersonalInfo from '../components/PersonalInfo';
import AddressInfo from '../components/AddressInfo';
import Confirmation from '../components/Confirmation';
import Navigation from '../components/Navigation';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

const Layout = () => {
  const dispatch = useDispatch();
  const { step, ...formData } = useSelector(state => state.form);

  useEffect(() => {
    const data = getFromLocalStorage();
    if (data) {
      dispatch(loadFormData(data));
    }
  }, [dispatch]);

  useEffect(() => {
    saveToLocalStorage(formData);
  }, [formData]);

  const handleChange = (e) => {
    dispatch(updateFormData({ [e.target.name]: e.target.value }));
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return <PersonalInfo data={formData} onChange={handleChange} />;
      case 2:
        return <AddressInfo data={formData} onChange={handleChange} />;
      case 3:
        return <Confirmation data={formData} />;
      default:
        return null;
    }
  };

  return (
    <div className="app">
      <TransitionGroup>
        <CSSTransition
          key={step}
          timeout={300}
          classNames="form-step"
        >
          <div className="form-container">
            {renderStep()}
          </div>
        </CSSTransition>
      </TransitionGroup>
      <Navigation step={step} />
    </div>
  );
}

export default Layout;
