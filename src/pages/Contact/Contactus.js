import React, { useState, useEffect } from "react";
import { FaDiscord, FaTwitter, FaGithub } from "react-icons/fa";
import contactImage from "../../assets/mainPages/contact-us.webp";
import "./Contactus.css";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import validate from "../../utils/validation";
import AuthErrorMessage from "../../components/AuthError";
import { toast } from "react-toastify";

const Contact = () => {
  useEffect(() => {
    AOS.init({
      once: false,
    });
    AOS.refresh();
  }, []);

  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [error, setError] = useState({
    name: true,
    email: true,
    message: true,
  });
  const [success, setsuccess] = useState("");

  const handleResponse = async (e) => {
    e.preventDefault();
    setsuccess("");
    let submitable = true;
    Object.values(error).forEach(err=>{
      if(err !== false){
        submitable = false;
        return;
      }
    })

    if (submitable) {
      await fetch("http://localhost:3000/sendMail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });
      setsuccess("Contact Request sent successfully!!");
    }else{
      toast.error("Please fill the form correctly", { position: 'top-center', autoClose: 3000, theme: 'colored' })
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((prev) => {
      return { ...prev, [name]: value };
    });
    setError((prev) => {
      const errors = validate[name](value);
      return { ...prev, ...errors };
    });
  };

  return (
    <div className="contact">
      <div className="container">
        <div className="c_head">
        <h1
              className="contact-title"
              data-aos="fade-down"
              data-aos-duration="500"
            >
              Contact Us
            </h1>
            <p
              className="contact-description"
              data-aos="fade-down"
              data-aos-duration="500"
            >
              We'd love to hear from you! Reach out to us for any inquiries,
              feedback, or collaboration opportunities.
            </p>
        </div>
     
        <div className="contact-content">
          <div className="contact-text">
          
            {success && (
              <p className="text-green-600 text-[18px] font-18 text-left mb-3">
                {success}
              </p>
            )}

            <form className="contact-form" onSubmit={handleResponse} role="form">
              <div className="form-field">
                <label
                  htmlFor="name"
                  className="text-left block uppercase tracking-wide text-lg font-bold mb-2"
                  data-aos="fade-left"
                  data-aos-duration="500"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Name"
                  className={`form-input focus:ring-blue-600 focus:border-blue-600`}
                  required
                  value={form.name}
                  onChange={handleChange}
                  data-aos="fade-left"
                  data-aos-duration="500"
                  aria-labelledby="name"
                  aria-describedby={error.name && error.nameError ? "nameError" : null}
                  aria-required="true"
                  aria-invalid={error.name && error.nameError ? "true" : "false"}
                />
                {error.name && error.nameError ? (
                  <AuthErrorMessage message={error.nameError} role="alert"
                  id="nameError"
                  aria-live="assertive" />
                ) : null}
              </div>
              <div className="form-field">
                <label
                  htmlFor="email"
                  className="block uppercase tracking-wide text-lg font-bold mb-2 text-left"
                  data-aos="fade-left"
                  data-aos-duration="500"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Email"
                  className={`form-input focus:ring-blue-600 focus:border-blue-600`}
                  required
                  value={form.email}
                  onChange={handleChange}
                  data-aos="fade-left"
                  data-aos-duration="500"
                  aria-labelledby="email"
                  aria-describedby={error.email && error.emailError ? "emailError" : null}
                  aria-required="true"
                  aria-invalid={error.email && error.emailError ? "true" : "false"}
                />
                {error.email && error.emailError ? (
                  <AuthErrorMessage message={error.emailError} role="alert"
                  id="emailError"
                  aria-live="assertive" />
                ) : null}
              </div>
              <div className="form-field">
                <label
                  htmlFor="message"
                  className="block uppercase tracking-wide text-lg font-bold mb-2 text-left"
                  data-aos="fade-left"
                  data-aos-duration="500"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  placeholder="Message"
                  name="message"
                  className={`form-input message-input focus:ring-blue-600 focus:border-blue-600`}
                  required
                  value={form.message}
                  onChange={handleChange}
                  data-aos="fade-left"
                  data-aos-duration="500"
                  aria-labelledby="message"
                  aria-describedby={error.message && error.messageError ? "messageError" : null}
                  aria-required="true"
                  aria-invalid={error.message && error.messageError ? "true" : "false"}
                />
                {error.message && error.messageError ? (
                  <AuthErrorMessage message={error.messageError} role="alert"
                  id="messageError"
                  aria-live="assertive" />
                ) : null}
              </div>
              <button
                data-aos="fade-up"
                data-aos-duration="500"
                type="submit"
                className="submit-btn"
                onClick={handleResponse}
              >
                Submit
              </button>
            </form>
          </div>
          <div
            className="contact-image"
            data-aos="fade-right"
            data-aos-duration="500"
          >
            <img
              loading='lazy'
              style={{ marginLeft: "10%" }}
              src={contactImage}
              alt="a cartoon of a person wearing a headset"
              className="contact-image"
            />
          </div>
        </div>
        <div className="contact-social-icons">
          <h1 style={{ marginTop: 20, marginBottom: 20, fontSize: 30 }}>
            Connect with us:
          </h1>
          <div className="social-icons">
            <Link to="/develop" className="social-icon-twitter">
              <FaTwitter />
            </Link>
            <Link
              to="https://github.com/rohansx/informatician"
              target="blank"
              className="social-icon-github"
            >
              <FaGithub />
            </Link>
            <Link to="/develop" className="social-icon-discord">
              <FaDiscord />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
