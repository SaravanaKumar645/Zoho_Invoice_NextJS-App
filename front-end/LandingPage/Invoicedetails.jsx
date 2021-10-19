import React from "react";
import { FaTwitterSquare, FaYoutubeSquare } from "react-icons/fa";
import Image from "next/image";
import { Button, Select, MenuItem } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import invoicestyles from "./Invoicedetails.module.css";
const countries = [
  {
    name: "Global",
    flag: "/images/country-flags/globe.png",
  },
  {
    name: "United Kingdom",
    flag: "/images/country-flags/united-kingdom.png",
  },
  {
    name: "Australia",
    flag: "/images/country-flags/australia.png",
  },
  {
    name: "UAE",
    flag: "/images/country-flags/united-arab-emirates.png",
  },
  {
    name: "Bahrain",
    flag: "/images/country-flags/bahrain.png",
  },
  {
    name: "Qatar",
    flag: "/images/country-flags/qatar.png",
  },
  {
    name: "UK",
    flag: "/images/country-flags/united-kingdom.png",
  },
  {
    name: "United States",
    flag: "/images/country-flags/united-states.png",
  },
  {
    name: "Canada",
    flag: "/images/country-flags/canada.png",
  },
  {
    name: "India",
    flag: "/images/country-flags/india.png",
  },
  {
    name: "Saudi Arabia",
    flag: "/images/country-flags/saudi-arabia.png",
  },
  {
    name: "Kuwait",
    flag: "/images/country-flags/kuwait.png",
  },
  {
    name: "Oman",
    flag: "/images/country-flags/oman.png",
  },
];
const Invoicedetails = () => {
  const [country, setCountry] = React.useState(countries[0].name);

  const handleChange = (event) => {
    setCountry(event.target.value);
  };

  return (
    <div className={invoicestyles.invoicedetails}>
      <div className={invoicestyles.header}>
        <img
          src="/images/country-flags/green-globe.png"
          className={invoicestyles.greenGlobe}
        />
        <div className={invoicestyles.titleClass}>
          <h1>
            Transform your billing process for{" "}
            <span style={{ color: "greenyellow" }}> ₹0</span>
          </h1>
          <p>
            Experience how professional billing should feel with{" "}
            <b>Zoho Invoice</b>
          </p>
        </div>

        <div className={invoicestyles.btnClass}>
          <Button id={invoicestyles.Button} variant="contained">
            ACCESS ZOHO INVOICE
          </Button>
        </div>
      </div>
      <div className={invoicestyles.content}>
        <div className={invoicestyles.imgClass}>
          <Image
            src="/images/invoice-details/what-is-invoice.jpg"
            width="300"
            height="200"
            layout="fixed"
          />
          <Image
            src="/images/invoice-details/what-is-timesheet.jpg"
            width="300"
            height="200"
            layout="fixed"
          />
        </div>
        <div className={invoicestyles.details}>
          <div className={invoicestyles.listClass}>
            <ul className={invoicestyles.ul}>
              <h3>Product</h3>
              <li>
                Features <div className={invoicestyles.hr}></div>
              </li>
              <li>
                Pricing - It's Free<div className={invoicestyles.hr}></div>
              </li>
              <li>
                Mobile Invoicing<div className={invoicestyles.hr}></div>
              </li>
              <li>
                Integrations<div className={invoicestyles.hr}></div>
              </li>
              <li>
                Customer Testimonials<div className={invoicestyles.hr}></div>
              </li>
              <li>
                Case Studies<div className={invoicestyles.hr}></div>
              </li>
            </ul>
            <ul className={invoicestyles.ul}>
              <h3>Resources</h3>
              <li>
                Business Guides<div className={invoicestyles.hr}></div>
              </li>
              <li>
                Help Documentation<div className={invoicestyles.hr}></div>
              </li>
              <li>
                FAQs<div className={invoicestyles.hr}></div>
              </li>
              <li>
                What's New ?<div className={invoicestyles.hr}></div>
              </li>
              <li>
                Release Notes<div className={invoicestyles.hr}></div>
              </li>
            </ul>
            <ul className={invoicestyles.ul}>
              <h3>Quick Links</h3>
              <li>
                GDPR and Zoho Finance<div className={invoicestyles.hr}></div>
              </li>
              <li>
                Industries Best Suited For
                <div className={invoicestyles.hr}></div>
              </li>
              <li>
                Invoice Templates<div className={invoicestyles.hr}></div>
              </li>
            </ul>
          </div>
          <div className={invoicestyles.socialandcountryWrapper}>
            <div className={invoicestyles.socialmedia}>
              <h3>Connect with us</h3>
              <FaTwitterSquare className={invoicestyles.twitterIcon} />
              <FaYoutubeSquare className={invoicestyles.ytIcon} />
            </div>
            <div className={invoicestyles.selectCountry}>
              <InputLabel style={{ color: "white", fontWeight: "600" }}>
                Select Edition
              </InputLabel>

              <Select
                className={invoicestyles.select}
                value={country}
                onChange={handleChange}
                size="small"
              >
                {countries.map((c, index) => (
                  <MenuItem
                    className={invoicestyles.menuitem}
                    value={c.name}
                    key={index}
                    onFocus={() => {}}
                  >
                    <Image src={c.flag} width="24" height="24" />
                    &nbsp;{c.name}
                  </MenuItem>
                ))}
              </Select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Invoicedetails;
