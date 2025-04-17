import React from 'react';
import './ContactSection.css';

const ContactInfo = () => {
  return (
    <div className="contact-info col-12 col-md-6">
      <h2>Contact Information</h2>
      <div className="contact-item">
        <p>
          <strong>Office Address:</strong><br />
          Suite 02, Level 12, Sahera Tropical Center 218<br />
          New Elephant Road, Dhaka - 1205
        </p>
      </div>
      <div className="contact-item">
        <p>
          <strong>Phone Number:</strong><br />
          +8801678170593, 01919-264687<br />
          02-9611936
        </p>
      </div>
      <div className="contact-item">
        <p>
          <strong>Email Address:</strong><br />
          support@LabArtisan
        </p>
      </div>
      <div className="contact-item">
        <p>
          <strong>Website Address:</strong><br />
          http://LabArtisan
        </p>
      </div>
    </div>
  );
};

export default ContactInfo;
