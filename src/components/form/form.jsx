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
          Name:
          <input type='text' name='name' />
        </label>
        <br />
        <label>
          Email:
          <input type='text' name='email' />
        </label>
        <br />
        <label>
          Message:
          <textarea name='message' rows='10' cols='30'></textarea>
        </label>
        <input type='submit' name='message' value='Submit' />
      </form>
    </div>
  );
}

export default Form;
