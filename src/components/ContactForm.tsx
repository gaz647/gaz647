import "./ContactForm.css";
import { useState } from "react";
import { useTypewriter } from "react-simple-typewriter";

const ContactForm = ({ language }: { language: string }) => {
  const [result, setResult] = useState("");

  const getWords = () => {
    // const index = Math.random() * 5;
    // console.log(index);
    console.log("kokot");
  };

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
    onLoopDone: () => getWords(),
  });

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
      <form onSubmit={onSubmit}>
        <input
          type="text"
          name="name"
          placeholder={language === "en" ? "name" : "jméno"}
        />

        <input type="email" name="email" placeholder="email" />

        <textarea
          className="contact-form-text-area"
          name="message"
          // placeholder={language === "en" ? "message" : "zpráva"}
          placeholder={text}
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
