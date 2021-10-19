import React from "react";
import FooterStyle from "./Footer.module.css";
const Footer = () => {
  return (
    <footer className={FooterStyle.footer}>
      <div className={FooterStyle.footerLinks}>
        <a href="#">
          Zoho Home &emsp;<span className={FooterStyle.span}>│</span>
        </a>
        <a href="#">
          Contact&emsp;<span className={FooterStyle.span}>│</span>
        </a>
        <a href="#">
          Security&emsp;<span className={FooterStyle.span}>│</span>
        </a>
        <a href="#">
          IPR Complaints&emsp;<span className={FooterStyle.span}>│</span>
        </a>
        <a href="#">
          Anti-spam Policy&emsp;<span className={FooterStyle.span}>│</span>
        </a>
        <a href="#">
          Terms of Service&emsp;<span className={FooterStyle.span}>│</span>
        </a>
        <a href="#">
          Privacy Policy&emsp;<span className={FooterStyle.span}>│</span>
        </a>
        <a href="#">
          Cookie Policy&emsp;<span className={FooterStyle.span}>│</span>
        </a>
        <a href="#">
          GDPR Complaince&emsp;<span className={FooterStyle.span}>│</span>
        </a>
        <a href="#">
          Abuse Policy&emsp;<span className={FooterStyle.span}>│</span>
        </a>
      </div>
      <h6 className={FooterStyle.h6}>
        &copy; 2021 ,Zoho Corporation Pvt.Ltd.All Rights Reserved.
      </h6>
    </footer>
  );
};

export default Footer;
