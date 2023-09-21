import React from "react";
import "./Footer2.css";
import {
  FaLinkedin,
  FaFacebook,
  FaTwitter,
  FaYoutube,
  FaExternalLinkAlt,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <div className="footer-column-1">
            <img src="https://icisml.eai-conferences.org/wp-content/uploads/sites/31/2021/03/EAI-footer-logo.png" alt="" width={100} height={50}/>
              <h3>About</h3>
              <p>
                    The 2nd International Conference on Intelligent Systems and Machine Learning (ICISML 2023) is a premier conference that focuses on the latest advances and emerging technologies in the field of intelligent systems and machine learning.
              </p>
              
              
            </div>
          </div>
          <div className="col-md-4">
            <div className="footer-column-2">
              <h3>Contact Us</h3>
              <p>
                VNR Vignana Jyothi Institute of Engineering and Technology<br />
                Email: icisml2023@eai.eu<br />
              </p>
              <a
                target="/"
                href="https://icisml.eai-conferences.org/2023/"
              >
                Visit our Website
                <FaExternalLinkAlt
                  size={15}
                  style={{ color: "#fff", marginRight: "1rem" }}
                />
              </a>
            </div>
          </div>
          <div className="col-md-4">
            <div className="footer-column-3">
              <h4>Social Media</h4>
              <a
                target="/"
                href="https://www.linkedin.com/groups/2982575/"
              >
                <FaLinkedin
                  size={30}
                  style={{ color: "#fff", marginRight: "1rem" }}
                />
              </a>
              <a target="/" href="https://www.facebook.com/eai.eu">
                <FaFacebook
                  size={30}
                  style={{ color: "#fff", marginRight: "1rem" }}
                />
              </a>
              <a
                target="/"
                href="https://twitter.com/i/flow/login?redirect_after_login=%2Feai_social"
              >
                <FaTwitter
                  size={30}
                  style={{ color: "#fff", marginRight: "1rem" }}
                />
              </a>
              <a
                target="/"
                href="https://www.youtube.com/user/EAIchannel"
              >
                <FaYoutube
                  size={30}
                  style={{ color: "#fff", marginRight: "1rem" }}
                />
              </a>
              
            </div>
            
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
