import { useDispatch } from 'react-redux';

import About from './About';
import './App.css';
import Choice from './Choice';
import FavouriteSubject from './FavouriteSubject';
import Gender from './Gender';
import PersonalDetails from './PersonalDetails';
import Resume from './Resume'
import Url from './Url';

import { setReduxFormData, resetFormRedux } from '../reducers/formSlice';
import { useState } from 'react';


function App() {
  const dispatch = useDispatch();

  const initialLocalState = {
    firstName: '',
    lastName: '',
    email: '',
    contact: '',
    gender: 'male',
    favouriteSubject: [],
    resume: null,
    url: '',
    choice: '',
    about: '',
  };
  const [formData, setFormData] = useState(initialLocalState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleAbout = (text) => {
    setFormData(prev => ({ ...prev, about: text }));
  };

  const handleFavouriteSubject = (e) => {
    if (!(formData.favouriteSubject.includes(e.target.value))) {
      setFormData(prev => ({
        ...prev,
        favouriteSubject: [...prev.favouriteSubject, e.target.value],
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        favouriteSubject: prev.favouriteSubject.filter(subject => subject !== e.target.value),
      }));
    };
  };

  const handleResume = (e) => {
    setFormData(prev => ({ ...prev, resume: e.target.files[0]}));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(setReduxFormData(formData));

    // More functions to be updated here for backend works in the future
  };

  const handleReset = () => {
    setFormData(initialLocalState);
    dispatch(resetFormRedux());
  }

  return (
    <>
      <header className='mb-4 text-2xl'>
        YuP's First React Project
      </header>

      <main>
        <form onSubmit={handleSubmit} onReset={handleReset}>
          <PersonalDetails
            details={{
              firstName: formData.firstName,
              lastName: formData.lastName,
              email: formData.email,
              contact: formData.contact
            }}
            handleChange={handleChange}
          />

          <Gender gender={formData.gender} handleChange={handleChange} />

          <FavouriteSubject
            favouriteSubject={formData.favouriteSubject}
            handleFavouriteSubject={handleFavouriteSubject}
          />

          <Resume handleResume={handleResume} />

          <Url url={formData.url} handleChange={handleChange} />

          <Choice handleChange={handleChange} />

          <About handleAbout={handleAbout} />

          <button type='reset'>Reset</button>
          <button type='submit'>Submit</button>
        </form>
      </main>
    </>
  )
}

export default App
