import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { motion, AnimatePresence } from "framer-motion";
import "./Contact.css";

const Contact = () => {
  const formRef = useRef();
  const [submitted, setSubmitted] = useState(false);

  const sendEmail = async (e) => {
    e.preventDefault();

    try {
      const result = await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      console.log("Email sent:", result.text);
      setSubmitted(true);
    } catch (error) {
      console.error("Email error:", error.text);
      alert("There was a problem sending your message.");
    }
  };

  return (
    <div className="contact-section">
      <h2 className="contact-heading">Let's Connect</h2>
      <p className="contact-subheading">
        Got a question, project, or just want to say hey? Drop me a message!
      </p>

      <AnimatePresence mode="wait">
        {submitted ? (
          <motion.p
            key="thank-you"
            className="thank-you"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
          >
            Thanks! I will be in touch soon. 👋
          </motion.p>
        ) : (
          <motion.form
            key="form"
            ref={formRef}
            onSubmit={sendEmail}
            className="contact-form"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            <input
              type="text"
              name="user_name"
              placeholder="Your Name"
              required
            />
            <input
              type="email"
              name="user_email"
              placeholder="Your Email"
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows="6"
              required
            />
            <button type="submit" className="btn primary">
              Send Message
            </button>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Contact;
