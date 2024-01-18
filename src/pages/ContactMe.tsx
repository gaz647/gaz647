import ContactForm from "../components/ContactForm";
import "./ContactMe.css";

const ContactMe = ({ language }: { language: string }) => {
  return (
    <div className="contact-me">
      <div className="contact-form-container">
        <ContactForm language={language} />
      </div>
    </div>
  );
};

export default ContactMe;
