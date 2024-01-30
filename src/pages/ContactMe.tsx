import ContactForm from "../components/ContactForm";
import "./ContactMe.css";
import Heading from "../components/Heading";

const ContactMe = ({ language }: { language: string }) => {
  return (
    <div className="contact-me">
      <div className="contact-me-inner-container">
        <Heading
          text={language === "en" ? "Contact Me" : "Napište mi"}
          color={"rgb(234, 5, 255)"}
        />

        <div className="contact-form-container">
          <ContactForm language={language} />
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
