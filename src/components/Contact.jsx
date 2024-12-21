import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";
import plane from "../assets/img/plane.png";

export const Contact = () => {
  const form = useRef();
const[value, setValue] = useState(false)
  const sendEmail = (e) => {
    e.preventDefault();
    setValue(true)
    

    emailjs
      .sendForm("service_e1le9bz", "template_1qym11b", form.current, {
        publicKey: "iuK3j4T_aCdGznjRO",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <div id="contactus" className="contactus">
  

      <div className="image">
        <p className="headding">CONTACT US</p>
        <img src={plane} alt="" />
      </div>

      <div className="form">
        <form ref={form} onSubmit={sendEmail}>
          <div className="name-box">
            <div className="lable">
              <label className="name">Name</label>
            </div>
            <input className="box" type="text" name="from_name" required/>
          </div>

          <div className="email-box">
            <div className="lable">
              <label>Email</label>
            </div>
            <input type="email" name="from_email" required />
          </div>

          <div className="content-box">
            <div className="lable">
              {" "}
              <label>Message</label>
            </div>
            <textarea name="message" required/>
          </div>

          <div className="button">
            <input type="submit"  value="Send"  />
          </div>
        </form>
      </div>

    <div className="message">
      {value && <p>Message sent successfully</p>}
      </div>
    </div>
  );
};
