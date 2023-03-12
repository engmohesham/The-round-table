import React from "react";
import PizzaLeft from "../assets/pizzaLeft.jpg";
import "../styles/Contact.css";

function Contact() {
  return (
    <div className="contact">
      <div
        className="leftSide"
        style={{ backgroundImage: `url(${PizzaLeft})` }}
      ></div>
      <div className="rightSide">
        <h1>تواصل معنا</h1>

        <form id="contact-form" method="POST">
          <label htmlFor="name">الاسم بالكامل</label>
          <input name="name" placeholder="ادخل اسمك بالكامل..." type="text" />
          <label htmlFor="email">الايميل</label>
          <input name="email" placeholder="ادخل الايميل..." type="email" />
          <label htmlFor="message">رساله</label>
          <textarea
            rows="6"
            placeholder="ادخل الرساله..."
            name="message"
            required
          ></textarea>
          <button type="submit"> ارسل الرساله</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
