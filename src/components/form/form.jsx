import React, { useState, useMemo } from 'react';

import './form.css';

const encode = data => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&');
};

function Form() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState('');

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
    const formData = { name, email, message };

    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({ 'form-name': 'contact', ...formData }),
    })
      .then(() => setSubmitted(true))
      .catch(error => setSubmitError(error.message));
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
      <div className='form-message'>
        {submitError && (
          <div className='error-message message'>
            Failed to submit form: {submitError}
          </div>
        )}
        {submitted && (
          <div className='success-message message'>
            Thanks for reaching out!
          </div>
        )}
      </div>
      <div className='details-container'>
        <form
          className='form'
          method='post'
          name='contact'
          onSubmit={handleSubmit}
          data-netlify
        >
          <input type='hidden' name='form-name' value='contact' />
          <label>
            <input
              name='name'
              type='text'
              placeholder='Name'
              value={name}
              onChange={handleNameChange}
              required
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
              required
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
            required
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
