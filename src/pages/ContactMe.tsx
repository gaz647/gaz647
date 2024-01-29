import ContactForm from "../components/ContactForm";
import "./ContactMe.css";

const ContactMe = ({ language }: { language: string }) => {
  return (
    <div className="contact-me">
      <div className="contact-me-inner-container">
        <div className="contact-me-heading">
          {language === "en" ? "Contact Me" : "Napište mi"}
        </div>
        <div className="contact-form-container">
          <ContactForm language={language} />
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
