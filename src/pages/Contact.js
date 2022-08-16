import React from 'react';
import Image from '../components/Image';
import ContactFrom from '../components/Form/ContactFrom';
import NewsletterImg from '../Assets/01_Newsletter.png';

const Contact = () =>{
  return (
    <div className='contact-page pb-5'>
      <h1 className="text-center main-title">Contact Page</h1>
      <div className='container mt-5'>
        <div className="row">
        <div className="col-7">
          <ContactFrom className="row g-3" id="contact_from">
            <div className="col-12">
              <label htmlFor="inputEmail" className="form-label">
                Phone number
              </label>
              <input type="tel" className="form-control" id="Phonenumber" />
            </div>
          </ContactFrom>
          </div>
          <div className="col-5">
            <Image src={NewsletterImg} alt="contact img" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;