import React, { useState } from "react";
import styles from "../LandingPage/sign_up.module.css";
import Link from "next/link";
import GoogleLoginComponent from "../Components/GoogleLogin";
import FacebookLoginComponent from "../Components/FacebookLogin";
import Router from "next/router";

function sign_up() {
  const [success, setSuccess] = useState(false);
  const [data, setData] = useState();

  const signInResponse = (success, data) => {
    console.log("Inside signUp response......");
    if (success) {
      setSuccess(true);

      setData(data);
      console.log(data);
      Router.replace("/home");
    }
  };
  return (
    <div>
      <header className={styles.sign_header}>
        <p className={`${styles["sidebar_header"]} ${styles["sidebar_para"]}`}>
          <a>
            <img
              className={styles.invoice_logo}
              src="https://www.zoho.com/invoice/images/invoice-logo.svg"
              alt=""
            />
            <span> Zoho Invoice </span>
          </a>
        </p>
        <p className={styles.sign_in}>
          Already have a zoho account?
          <a className={styles.signin}>
            <Link href="/sign_in">Sign In</Link>
          </a>
        </p>{" "}
      </header>
      <section className={styles.sidebar_container}>
        <div className={styles.testimonial}>
          <p className={styles.testimonial_content}>
            {" "}
            Zoho Invoice provided us with a seamless platform for managing our
            customers, invoices, and billing. We are truly delighted with the
            service and support too. Kudos to Zoho!
          </p>
          <div className={styles.customer_info}>
            <div className={styles.img_}>
              <img
                src="https://www.zoho.com/in/invoice/home/prasad-diwan-innovfide-technologies-original.png"
                alt="Prasad Diwan"
                className={styles.customer_img}
              />
            </div>
            <div className={styles.customer_details}>
              <p className={styles.customer_name}>Prasad Diwan</p>
              <p>Full Stack Developer, Innovfide Technologies</p>
            </div>
          </div>
        </div>
        <div
          className={`${styles["sidebar_footer"]} ${styles["sidebar_footer_li"]}`}
        >
          <h5>OTHER FINANCE PRODUCTS</h5>
          <ul>
            <li>
              <a>Zoho Books</a>
            </li>
            <li>
              <a>Zoho Expense</a>
            </li>
            <li>
              <a>Zoho Subscriptions</a>
            </li>
          </ul>
        </div>
      </section>
      <div className={styles.signup_page}>
        <h1 className={styles.signup_header}>Get your free account!</h1>
        <div className={styles.signup_container}>
          <div className={styles.form}>
            <form className={styles.signupform}>
              <div className={styles.form_grp}>
                <input
                  type="text"
                  className={styles.form_field}
                  name="firstname"
                  placeholder="Full Name"
                  autofocus="true"
                />
                <input
                  type="email"
                  className={styles.form_field}
                  name="email"
                  autocomplete="on"
                  placeholder="Email Address"
                ></input>
                <input
                  type="password"
                  className={styles.form_field}
                  name="password"
                  autocomplete="on"
                  placeholder="Password"
                ></input>

                <input
                  type="text"
                  id="companyName"
                  className={styles.form_field}
                  placeholder="Company Name"
                />
                <select
                  className={styles.form_field}
                  name="country_state"
                  id="country_state"
                  aria-invalid="false"
                >
                  <option value="Andaman and Nicobar Islands">
                    Andaman and Nicobar Islands
                  </option>
                  <option value="Andhra Pradesh">Andhra Pradesh</option>
                  <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                  <option value="Assam">Assam</option>
                  <option value="Bihar">Bihar</option>
                  <option value="Chandigarh">Chandigarh</option>
                  <option value="Chhattisgarh">Chhattisgarh</option>
                  <option value="Dadra and Nagar Haveli">
                    Dadra and Nagar Haveli
                  </option>
                  <option value="Daman and Diu">Daman and Diu</option>
                  <option value="Delhi">Delhi</option>
                  <option value="Goa">Goa</option>
                  <option value="Gujarat">Gujarat</option>
                  <option value="Haryana">Haryana</option>
                  <option value="Himachal Pradesh">Himachal Pradesh</option>
                  <option value="Jammu and Kashmir">Jammu and Kashmir</option>
                  <option value="Jharkhand">Jharkhand</option>
                  <option value="Karnataka">Karnataka</option>
                  <option value="Kerala">Kerala</option>
                  <option value="Lakshadweep">Lakshadweep</option>
                  <option value="Madhya Pradesh">Madhya Pradesh</option>
                  <option value="Maharashtra">Maharashtra</option>
                  <option value="Manipur">Manipur</option>
                  <option value="Meghalaya">Meghalaya</option>
                  <option value="Mizoram">Mizoram</option>
                  <option value="Nagaland">Nagaland</option>
                  <option value="Odisha">Odisha</option>
                  <option value="Puducherry">Puducherry</option>
                  <option value="Punjab">Punjab</option>
                  <option value="Rajasthan">Rajasthan</option>
                  <option value="Sikkim">Sikkim</option>
                  <option value="Tamil Nadu">Tamil Nadu</option>
                  <option value="Telangana">Telangana</option>
                  <option value="Tripura">Tripura</option>
                  <option value="Uttar Pradesh">Uttar Pradesh</option>
                  <option value="Uttarakhand">Uttarakhand</option>
                  <option value="West Bengal">West Bengal</option>
                </select>
                <div className={styles.tos_label}>
                  <span>Your data will be in INDIA data center.</span>
                  <span className={styles.tos_label}>
                    <a href="#">Change Country</a>
                  </span>
                  <br />
                </div>
                <input
                  className={styles.tos_checkbox}
                  type="checkbox"
                  name="tos"
                  value="false"
                />
                <label className={styles.tos_label}>
                  I agree to the <a>Terms of Service</a> and{" "}
                  <a>Privacy Policy</a>.
                </label>
                <br />
                <input
                  className={styles.tos_checkbox}
                  type="checkbox"
                  name="tos"
                  value="false"
                />
                <label className={styles.tos_label}>
                  I would like to receive marketing communication from Zoho and
                  Zoho’s regional partners for future product updates, services
                  and events.{" "}
                </label>
                <button className={styles.btn_signup}>CREATE ACCOUNT</button>
                <div className={styles.socialMediaLogin}>
                  <p>or sign in using</p>
                  <GoogleLoginComponent signInResponse={signInResponse} />
                  <FacebookLoginComponent signInResponse={signInResponse} />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default sign_up;
