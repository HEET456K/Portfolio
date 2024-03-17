import { IoMdMail } from "react-icons/io";
import { BsTwitterX } from "react-icons/bs";
import { GrInstagram } from "react-icons/gr";
import { ImGithub } from "react-icons/im";
import { SiLinkedin } from "react-icons/si";
import { FaReact } from "react-icons/fa6";
import { SiExpress } from "react-icons/si";
import { SiNodedotjs } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";
import { SiTypescript } from "react-icons/si";
import { ImHtmlFive } from "react-icons/im";
import { ImCss3 } from "react-icons/im";
import { TbBrandCpp } from "react-icons/tb";
import { SiPython } from "react-icons/si";
import { Link } from "react-router-dom";

import "./FooterStyles.css";

import React from "react";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
          <div className="mail">
            <IoMdMail className="mail-logo" size={22} style={{ color: "#fff", marginRight: "2rem" }} />
            <p>Heetvavadiya369@gmail.com</p>
          </div>
          <div className="social">
            <h4>Socials</h4>
            <Link to="https://x.com/Heetvavadiya456?t=0J1XRy1dW9xfNtAzvG3b5w&s=09">
              <BsTwitterX className="social-link" size={25} style={{ color: "#fff", marginRight: "2rem" }} />
            </Link>
            <Link to="https://www.instagram.com/heet_vavadiya_456?igsh=dzloOGpjbGpnOWJu">
              <GrInstagram className="social-link" size={25} style={{ color: "#fff", marginRight: "2rem" }} />
            </Link>
            <Link to="https://github.com/HEET456K">
              <ImGithub className="social-link" size={25} style={{ color: "#fff", marginRight: "2rem" }} />
            </Link>
            <Link to="https://linkedin.com/in/heet-vavadiya-456k">
              <SiLinkedin className="social-link" size={25} style={{ color: "#fff", marginRight: "2rem" }} />
            </Link>

          </div>
        </div>
        <div className="right">
          <h4>SPECIALITIES</h4>
          <div className="entire-right">
            <div className="era-left">
              <div className="era">
                <FaReact size={25} className="lang-logo" style={{ color: "#fff", marginRight: "2rem" }} />
                <div className="lang">React </div>
              </div>
              <div className="era">
                <SiExpress size={25} className="lang-logo" style={{ color: "#fff", marginRight: "2rem" }} />
                <div className="lang">ExpressJs</div>
              </div>
              <div className="era">
                <SiNodedotjs size={25} className="lang-logo" style={{ color: "#fff", marginRight: "2rem" }} />
                <div className="lang">NodeJs </div>
              </div>
            </div>

            <div className="era-mid">
              <div className="era">
                <IoLogoJavascript size={25} className="lang-logo" style={{ color: "#fff", marginRight: "2rem" }} />
                <div className="lang">Javascript</div>
              </div>
              <div className="era">
                <SiTypescript size={22} className="lang-logo" style={{ color: "#fff", marginRight: "2rem" }} />
                <div className="lang">Typescript</div>
              </div>
              <div className="era">
                <ImHtmlFive size={25} className="lang-logo" style={{ color: "#fff", marginRight: "2rem" }} />
                <div className="lang">HTML</div>
              </div>
            </div>
            <div className="era-right">
              <div className="era">
                <ImCss3 size={23} className="lang-logo" style={{ color: "#fff", marginRight: "2rem" }} />
                <div className="lang">CSS</div>
              </div>
              <div className="era">
                <TbBrandCpp size={25} className="lang-logo" style={{ color: "#fff", marginRight: "2rem" }} />
                <div className="lang">C/C++</div>
              </div>
              <div className="era">
                <SiPython size={23} className="lang-logo" style={{ color: "#fff", marginRight: "2rem" }} />
                <div className="lang">Python</div>
              </div>
            </div>
          </div>
        </div >
      </div>
    </div>
  );
};

export default Footer;
