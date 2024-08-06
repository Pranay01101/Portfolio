import React from 'react';
import '../styles/Contact.css';
import { FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contact" className="contact">
      {/* Section title */}
      <h2>Contact</h2>
      
      {/* Contact email */}
      <p>
        {/* Envelope icon */}
        <FaEnvelope className="icon" />
        {/* Email address with mailto link */}
        <a href="mailto:pranaymoon0199@gmail.com">pranaymoon0199@gmail.com</a>
      </p>
      
      {/* LinkedIn profile */}
      <p>
        {/* LinkedIn icon */}
        <FaLinkedin className="icon" />
        {/* LinkedIn profile link */}
        <a href="https://www.linkedin.com/in/pranay-moon">linkedin.com/in/pranay-moon</a>
      </p>
      
      {/* GitHub profile */}
      <p>
        {/* GitHub icon */}
        <FaGithub className="icon" />
        {/* GitHub profile link */}
        <a href="https://github.com/Pranay0110">github.com/Pranay0110</a>
      </p>
    </section>
  );
};

export default Contact;
