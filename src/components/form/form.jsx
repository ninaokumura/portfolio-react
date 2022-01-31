import React from 'react';

import './form.css';

function Form() {
  return (
    <div className='form-container'>
      <div className='details-container'>
        <form
          className='form'
          method='post'
          action='mailto:elaineokumura@gmail.com'
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
        <div>
          <h3 className='contact'>email:elaineokumura@gmail.com</h3>
          <h3 className='contact'>phone: (+64)027 548 7193</h3>
          <button className='btn'>Download resume</button>
        </div>
      </div>
    </div>
  );
}

export default Form;
