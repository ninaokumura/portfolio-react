import React, { useState, useMemo } from 'react';

import './form.css';

function Form() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleNameChange = event => {
    setName(event.target.value);
  };

  const handleEmailChange = event => {
    setEmail(event.target.value);
  };

  const handleMessageChange = event => {
    setMessage(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    console.log(event);
  };

  const isFormValid = useMemo(() => {
    if (name === '') {
      return false;
    }
    if (email === '') {
      return false;
    }
    if (message === '') {
      return false;
    }
    return true;
  }, [name, email, message]);

  return (
    <div className='form-container'>
      <div className='details-container'>
        <form
          className='form'
          //  action='mailto:elaineokumura@gmail.com'
          encType='text/plain'
          onSubmit={handleSubmit}
        >
          <label>
            <input
              name='name'
              type='text'
              placeholder='Name'
              value={name}
              onChange={handleNameChange}
            />
          </label>
          <br />
          <label>
            <input
              name='email'
              type='email'
              placeholder='Email'
              value={email}
              onChange={handleEmailChange}
            />
          </label>
          <br />

          <textarea
            name='message'
            placeholder='Message'
            rows='10'
            cols='30'
            value={message}
            onChange={handleMessageChange}
          ></textarea>

          <input
            className='submit-btn'
            type='submit'
            value='Submit'
            disabled={!isFormValid}
          />
        </form>
        <div className='contact-info'>
          <h2>Get in touch</h2>
          <h3 className='contact'>email:elaineokumura@gmail.com</h3>
          <h3 className='contact'>phone: (+64) 027 548 7193</h3>
          <button className='btn'>Download resume</button>
        </div>
      </div>
    </div>
  );
}

export default Form;
