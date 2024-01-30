import React, { useRef } from "react";
import "./Contact.scss";
import emailjs from "emailjs-com";

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_apqqymm",
        "template_vnkkzti",
        form.current,
        "mdsV_jJMJE7QB9W3F"
      )
      .then(
        () => {
          window.alert("Correo enviado correctamente");
        },
        (error) => {
          window.alert(error.text);
        }
      );
  };

  return (
    <React.Fragment>
      <section className="contact-container" id="Contact">
        <div className="box-container neu">
          {/* <div class="box">
            <div class="content">
              <h2>Hover me!</h2>
            </div>
          </div> */}
          <div className="text-container center">
            <h3 className="title-section">Contact</h3>
            <h2>Get in touch</h2>
            <p>
              My inbox is always open. Whether you have a question or just want
              to say hi, I’ll try my best to get back to you!
            </p>
          </div>
          <div className="form-container ">
            <div className="box">
              <form
                ref={form}
                onSubmit={sendEmail}
                className="contact-form content"
              >
                <input
                  className="input-form"
                  type="text"
                  placeholder="Your name"
                  required
                  name="name"
                  id="validationCustom01"
                />
                <input
                  className="input-form"
                  type="email"
                  placeholder="Your e-mail"
                  required
                  name="email"
                  id="validationCustom02"
                />
                <textarea
                  className="input-form-text"
                  placeholder="Type the message here"
                  required
                  name="message"
                  id="validationCustom03"
                ></textarea>
                <button
                  className="btn-form"
                  type="submit"
                  value="Send"
                >
                  Send
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}

export default Contact;
