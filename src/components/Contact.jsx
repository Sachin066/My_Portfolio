import React from 'react'

export default function Contact() {
  return (


    <section className="contact" id="contact">
    <h1 className="contact-h1">CONTACT</h1>
    <div className="contact-container container flex">
      <div className="contact-box flex">
        <div className="contact-left flex">
          <h2>Let's Talk</h2>
          <div className="contact-details flex">
            <div className="contact-links flex">
              <i className="fa-solid fa-location-dot"></i>
              <p>Thane, India</p>
            </div>

            <div className="contact-links flex">
              <i className="fa-regular fa-envelope"></i>
              <p>sachinsaroj@gmail.com</p>
            </div>

            <div className="contact-links flex">
              <i className="fa-solid fa-phone"></i>
              <p>8433616863</p>
            </div>
          </div>
        </div>

        <div className="contact-right flex">
          <div className="contact-form flex">
            <form action="#" className="flex">
              <input type="text" placeholder="Name" required />
              <input type="email" placeholder="Email" required />
              <textarea
                cols="30"
                rows="5"
                placeholder="Message"
                required
              ></textarea>
              <button type="submit" className="primary-btn">
                SUBMIT
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>

  )
}
