import "./ContactForm.css";
import { useState } from "react";

const ContactForm = () => {
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
      <h1>Contact Me</h1>
      <form onSubmit={onSubmit}>
        <p>subject</p>
        <input type="text" name="name" />
        <p>email</p>
        <input type="email" name="email" />
        <p>message</p>
        <textarea className="contact-form-text-area" name="message"></textarea>
        <input type="submit" />
      </form>
      <span>{result}</span>
    </div>
  );
};

export default ContactForm;
