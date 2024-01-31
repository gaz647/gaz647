import "./ContactForm.css";
import { useEffect, useState } from "react";
import { useTypewriter } from "react-simple-typewriter";
import { v4 as uuidv4 } from "uuid";

const ContactForm = ({ language }: { language: string }) => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [submitCode, setSubmitCode] = useState<string>("");
  const [result, setResult] = useState("");
  const [userSubmitCode, setUserSubmitCode] = useState<string>("");

  const generateCode = () => {
    setSubmitCode(uuidv4().substring(0, 8));
  };

  useEffect(() => {
    generateCode();
  }, []);

  const enWords = [
    "We want you to work for us !",
    "Join us and together we'll shape a successful future !",
    "Your talent is the key to our shared success !",
    "Grow your potential with us and achieve success together !",
    "Come and join our team !",
  ];
  const csWords = [
    "Chceme aby jsi pro nás pracoval !",
    "Přidej se k nám a společně budeme tvořit úspěšnou budoucnost !",
    "Tvůj talent je klíčem k našemu společnému úspěchu !",
    "Rozvíjej svůj potenciál s námi a dosahujeme úspěchů společně !",
    "Staň se členem našeho týmu !",
  ];

  const words = language === "en" ? enWords : csWords;

  const [text] = useTypewriter({
    words: words,
    loop: false,
    typeSpeed: 20,
  });

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!name || !email || !message || !userSubmitCode) {
      alert("Fill the form up!");
      generateCode();
      return;
    } else if (submitCode !== userSubmitCode) {
      alert("Codes do not match!");
      generateCode();
      return;
    } else {
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
    }
  };
  return (
    <div className="contact-form">
      <form onSubmit={onSubmit}>
        <input
          type="text"
          name="name"
          placeholder={language === "en" ? "Name" : "Jméno"}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="email"
          name="Email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <textarea
          className="contact-form-text-area"
          name="message"
          placeholder={text}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>

        <div className="anti-copy-container">
          <div className="submit-code">
            {language === "en" ? "Confirmation code: " : "Kód pro potvrzení:"}{" "}
            <span>{submitCode}</span>
          </div>
        </div>

        <input
          type="text"
          placeholder={
            language === "en"
              ? "Type the confirmation code"
              : "Opište kód pro potvrzení"
          }
          value={userSubmitCode}
          onChange={(e) => setUserSubmitCode(e.target.value)}
        />
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
