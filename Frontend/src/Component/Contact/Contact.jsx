import React from "react";
import "./Contact.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const Contact = () => {
  const contactLinks = [
    {
      icon: "fa-solid fa-phone",
      name: "Phone",
      link: "tel:+919002061462",
      displayText: "+919002061462",
    },
    {
      icon: "fa-brands fa-whatsapp",
      name: "WhatsApp",
      link: "https://wa.me/+919002061462",
      displayText: "WhatsApp Me",
    },
    {
      icon: "fa-brands fa-instagram",
      name: "Instagram",
      link: "https://instagram.com/",
      displayText: "Instagram Profile",
    },
    {
      icon: "fa-brands fa-facebook",
      name: "Facebook",
      link: "https://www.facebook.com/people/Chandan-Pal/pfbid0pCyC9eUWFbS1zE8D7UJWE34yefwJRYzB1GUoJTDekjFmRfUMVTaUBAEU2z2VAYHPl/?rdid=1MmkkQZrZo4SqLdC&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1EwK8gDJ9m%2F",
      displayText: "Facebook Profile",
    },
    {
      icon: "fa-brands fa-square-x-twitter",
      name: "Twitter",
      link: "https://twitter.com/",
      displayText: "Twitter Profile",
    },
  ];

  return (
    <>
        <div className="hader-container">
            <Header />
        </div>
        <div className="hide"></div>
        <div className="xyz">
            <div className="contact-page">
            <h1>Contact Us</h1>
            <p>Feel free to connect with me through the platforms below:</p>
            <div className="contact-links">
              {contactLinks.map((contact, index) => (
              <a
                key={index}
                href={contact.link}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link"
              >
                <span className={contact.icon}></span>
                <span className="contact-text">{contact.displayText}</span>
              </a>
            ))}
            </div>
          </div>
        </div>

        <div className="footer-container">
          <Footer />
        </div>
    </>
  );
};

export default Contact;
