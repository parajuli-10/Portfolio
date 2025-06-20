import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

function Contact() {
  const formRef = useRef();
  const [result, setResult] = useState(null);

  const sendEmail = (e) => {
    e.preventDefault();
    // Send form email using EmailJS service
    emailjs.sendForm(
      "YOUR_SERVICE_ID",
      "YOUR_TEMPLATE_ID",
      formRef.current,
      {
        publicKey: "YOUR_PUBLIC_KEY"  // EmailJS public API key
      }
    ).then(
      () => {
        // Email sent successfully
        setResult("success");
        // Clear the form fields
        formRef.current.reset();
      },
      (error) => {
        console.error("EmailJS Error:", error);
        setResult("error");
      }
    );
  };

  return (
    <section id="contact" className="fade-in glass">
      <h2>Contact</h2>
      <form ref={formRef} onSubmit={sendEmail}>
        <label>
          Name
          <input type="text" name="user_name" placeholder="Your name" required />
        </label>
        <label>
          Email
          <input type="email" name="user_email" placeholder="you@example.com" required />
        </label>
        <label>
          Message
          <textarea name="message" rows="4" placeholder="Say hello..." required></textarea>
        </label>
        <button type="submit" className="btn">Send</button>
      </form>

      {/* Display success/error message */}
      {result === "success" && (
        <p className="message success">Thank you! Your message has been sent.</p>
      )}
      {result === "error" && (
        <p className="message error">Oops, something went wrong. Please try again.</p>
      )}
    </section>
  );
}

export default Contact;
