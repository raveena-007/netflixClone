import React from "react";
import "./Footer.css";

const Footer = () => {
  const footerLinks = [
    [
      "FAQ",
      "Help Center",
      "Investor Relations",
      "Ways to Watch",
      "Corporate Information",
      "Netflix Originals",
    ],
    ["Home", "Jobs", "Terms of Use", "Contact Us"],
    ["Account", "Redeem Gift Cards", "Privacy", "Speed Test"],
    ["Media Center", "Buy Gift Cards", "Cookie Preferences", "Legal Notices"],
  ];

  return (
    <div className="footer">
      <div className="footercon">
        <h5>Questions? Call 1-866-579-7172</h5>
        <div className="footer-links">
          {footerLinks.map((list, index) => (
            <ul className="list1" key={index}>
              {list.map((item, i) => (
                <li key={i}>
                  <a href="/">{item}</a>
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
      <div className="end">
        <h2>Netflix US</h2>
      </div>
    </div>
  );
};

export default Footer;
