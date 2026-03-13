import React from "react";

function Contact() {
  return (
    <div className="contact-page">
      <div className="contact-container">
        <h1>Get connected</h1>
        <p className="contact-subtext">
          Connect with us today for the demo ; Send us email to info@shnoor.com
          and team will get back on the same.
        </p>

        <div className="contact-cards">
          <div className="contact-card">
            <div className="icon-circle filled">✉</div>
            <h2>Send Email</h2>
            <p>info@shnoor.com</p>
          </div>

          <div className="contact-card">
            <div className="icon-circle">📞</div>
            <h2>Call Us</h2>
            <p>9429694298</p>
          </div>

          <div className="contact-card">
            <div className="icon-circle">📍</div>
            <h2>10009 Mount Tabor Road, Odessa, Missouri USA</h2>
            <p>10009 Mount Tabor Road, Odessa Missouri, United States.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;