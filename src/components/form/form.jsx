import React from 'react';

import './form.css';

function Form() {
  return (
    <div className='form-container'>
      <form
        className='form'
        method='post'
        action='mailto:elaineokumura@gmail.com'
        method='post'
        encType='text/plain'
      >
        <label>
          <input type='text' placeholder='Name' />
        </label>
        <br />
        <label>
          <input type='text' placeholder='Email' />
        </label>
        <br />
        <label>
          <textarea placeholder='Message' rows='10' cols='30'></textarea>
        </label>
        <input
          className='submit-btn'
          type='submit'
          name='message'
          value='Submit'
        />
      </form>
    </div>
  );
}

export default Form;
