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
      <h1>{language === "en" ? "Contact Me" : "Napište mi"}</h1>
      <form onSubmit={onSubmit}>
        <p>{language === "en" ? "subject" : "předmět"}</p>
        <input type="text" name="name" />
        <p>email</p>
        <input type="email" name="email" />
        <p>{language === "en" ? "message" : "zpráva"}</p>
        <textarea className="contact-form-text-area" name="message"></textarea>
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
