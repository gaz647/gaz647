import ContactForm from "../components/ContactForm";
import "./ContactMe.css";
import Heading from "../components/Heading";

const ContactMe = ({ language }: { language: string }) => {
  return (
    <div className="contact-me">
      <div className="contact-me-inner-container black">
        <Heading
          text={language === "en" ? "Contact Me" : "Napište mi"}
          color={"whitesmoke"}
        />

        <div className="contact-form-container">
          <ContactForm language={language} />
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
