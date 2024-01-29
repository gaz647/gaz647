import "./ContactForm.css";
import { useState } from "react";

const ContactForm = ({ language }: { language: string }) => {
  const [result, setResult] = useState("");

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.currentTarget);

    formData.append(
      "access_key",
      import.meta.env.VITE_REACT_APP_WEB3FORMS_API_KEY
    );

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    }).then((res) => res.json());

    if (res.success) {
      setResult(res.message);
    } else {
      setResult(res.message);
    }
  };
  return (
    <div className="contact-form">
      {/* <div className="contact-form-heading">
        {language === "en" ? "Contact Me" : "Napište mi"}
      </div> */}
      <form onSubmit={onSubmit}>
        <input type="text" name="name" placeholder="name" />

        <input type="email" name="email" placeholder="email" />

        <textarea
          className="contact-form-text-area"
          name="message"
          placeholder="message"
        ></textarea>
        <input
          type="submit"
          className="contact-form-submit-btn"
          value={`${language === "en" ? "SUBMIT" : "ODESLAT"}`}
        />
      </form>
      <span>{result}</span>
    </div>
  );
};

export default ContactForm;
