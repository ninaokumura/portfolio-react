import React from 'react';

import './form.css';

function Form() {
  return (
    <div className='form-container'>
      <div className='details-container'>
        <form className='form' method='post' name='contact' data-netlify>
          <input type='hidden' name='form-name' value='contact' />

          <label>
            <input name='name' type='text' placeholder='Name' required />
          </label>
          <br />
          <label>
            <input name='email' type='email' placeholder='Email' required />
          </label>
          <br />

          <textarea
            name='message'
            placeholder='Message'
            rows='10'
            cols='30'
            required
          ></textarea>

          <input className='submit-btn' type='submit' value='Submit' />
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
