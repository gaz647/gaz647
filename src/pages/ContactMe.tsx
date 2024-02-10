import "./ContactMe.css";
import Heading from "../components/Heading";
import { useEffect, useState } from "react";
import { useTypewriter } from "react-simple-typewriter";
import { v4 as uuidv4 } from "uuid";
import Arrow from "../images/1548413370.svg";
import { SpinnerCircular } from "spinners-react";
import { ImCheckmark, ImCross } from "react-icons/im";

const ContactMe = ({ language }: { language: string }) => {
  enum ResultStatus {
    Success = "success",
    Failure = "failure",
    Empty = "",
  }

  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [submitCode, setSubmitCode] = useState<string>("");
  const [userSubmitCode, setUserSubmitCode] = useState<string>("");

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [result, setResult] = useState<ResultStatus>(ResultStatus.Empty);

  const generateCode = () => {
    setSubmitCode(uuidv4().substring(0, 6));
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
    setIsSubmitting(true);
    if (!name || !email || !message || !userSubmitCode) {
      alert("Fill the form up!");
      generateCode();
      return;
    } else if (submitCode !== userSubmitCode) {
      alert("Codes do not match!");
      generateCode();
      return;
    } else {
      setIsSubmitting(true);
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
        setResult(ResultStatus.Success);
        setIsSubmitting(false);
      } else {
        setResult(ResultStatus.Failure);
        setIsSubmitting(false);
      }
    }
  };

  const [isFormReady, setIsFormReady] = useState<boolean>(false);

  useEffect(() => {
    if (
      name &&
      email &&
      message &&
      userSubmitCode &&
      submitCode === userSubmitCode
    ) {
      setIsFormReady(true);
    }
  }, [email, message, name, submitCode, userSubmitCode]);

  useEffect(() => {
    if (result === ResultStatus.Failure) {
      setName("");
      setEmail("");
      setMessage("");
      generateCode();
      setUserSubmitCode("");
      setTimeout(() => {
        setResult(ResultStatus.Empty);
      }, 5000);
    }
  }, [ResultStatus.Empty, ResultStatus.Failure, result]);

  return (
    <div className="contact-me">
      <div className="contact-form-container">
        {isSubmitting ? (
          <div className="progress-container">
            <SpinnerCircular
              size={90}
              thickness={180}
              speed={100}
              color="#36ad47"
              secondaryColor="rgba(0, 0, 0, 0.44)"
            />
          </div>
        ) : result !== "" ? (
          <div className="progress-container">
            <div className="result-message">
              {result === ResultStatus.Success
                ? language === "en"
                  ? "Message sent!"
                  : "Zpráva odeslána!"
                : language === "en"
                ? "Sending failed, try again!"
                : "Odeslání selhalo, zkuste to znovu!"}
            </div>

            {result === ResultStatus.Success ? (
              <div className="result-icon result-icon-success">
                <ImCheckmark />
              </div>
            ) : (
              <div className="result-icon result-icon-failure">
                <ImCross />
              </div>
            )}
          </div>
        ) : (
          <>
            <Heading
              text={language === "en" ? "Contact Me" : "Napište mi"}
              color={"whitesmoke"}
            />
            <div className="contact-form black-container">
              <form onSubmit={onSubmit}>
                <input
                  className="contact-form-input"
                  type="text"
                  name="name"
                  placeholder={language === "en" ? "Name" : "Jméno"}
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />

                <input
                  className="contact-form-input"
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
                    {language === "en"
                      ? "Confirmation code: "
                      : "Kód pro potvrzení:"}{" "}
                    <span>{submitCode}</span>
                  </div>
                </div>

                <input
                  className="contact-form-input"
                  type="text"
                  placeholder={
                    language === "en"
                      ? "Type the confirmation code"
                      : "Opište kód pro potvrzení"
                  }
                  value={userSubmitCode}
                  onChange={(e) => setUserSubmitCode(e.target.value)}
                />
                <div className="contact-form-submit-container">
                  <img
                    className={`contact-form-arrow ${
                      isFormReady && "contact-form-arrow-visible"
                    }`}
                    src={Arrow}
                  />
                  <input
                    type="submit"
                    className={`contact-form-input contact-form-submit-btn ${
                      isFormReady && "contact-form-submit-btn-enabled"
                    }`}
                    value={`${language === "en" ? "SUBMIT" : "ODESLAT"}`}
                  />
                </div>
              </form>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ContactMe;
