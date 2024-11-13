import React from 'react';
import { GoMail } from "react-icons/go";
import { BsTelephoneInbound } from "react-icons/bs";
import styles from '../styles/Contact.module.css'; 

function Contact() {
  return (
    <div id="contact" className={styles.container}>
      
      <div className={styles.gridLayout}>
      
        
        <div className={styles.space}>

          <h2 className={styles.contactHeading}>Get In Touch</h2>
          <p className={styles.contactParagraph}>
            Drop me a line, send me a message, give me a call or simply reach out to me via email.
          </p>

          <div className={styles.contactInfo}>
            <GoMail size={30}/> essa.abbas11@gmail.com
          </div>

          <div className={styles.contactInfo}>
            <BsTelephoneInbound size={30}/> +92-343-289-6174
          </div>
        </div>

        
        <div className="space-y-8">
          <div className={styles.contactField} data-aos="zoom-in">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              className={styles.inputField}
              id="name"
            />
          </div>
          <div className={styles.contactField} data-aos="zoom-in">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              className={styles.inputField}
              id="email"
            />
          </div>
          <div className={styles.contactField} data-aos="zoom-in">
            <label htmlFor="msg">Message</label>
            <textarea
              className={styles.textareaField}
              id="message"
              rows={8}
            />
          </div>
          <button className={styles.button} data-aos="zoom-in">
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;