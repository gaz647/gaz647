import { useEffect, useState } from "react";
import "./Footer.css";

const Footer = () => {
  const [date, setDate] = useState<string>("");

  useEffect(() => {
    const date = new Date().getFullYear().toString();
    setDate(date);
  }, []);

  return (
    <footer className="footer">
      <div className="footer-item">
        <span>&copy; 2021-{date}</span>
        <span>gaz647</span>
      </div>
    </footer>
  );
};

export default Footer;
