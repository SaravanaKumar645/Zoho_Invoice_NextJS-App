import { useEffect } from "react";
import axios from "axios";
import Invoicedetails from "../LandingPage/Invoicedetails";
import AppInfo from "../LandingPage/AppInfo";
import Awards from "../LandingPage/Awards";
import CentreBanner from "../LandingPage/CentreBanner";
import CustomerLoving from "../LandingPage/CustomerLoving";
import Footer from "../LandingPage/Footer";
import Header from "../LandingPage/Header";
import Otherapps from "../LandingPage/Otherapps";
import State from "../LandingPage/State";

export default function LandingPage() {
  useEffect(() => {
    axios
      .get("http://localhost:4000/")
      .then((res) => {
        console.log(res.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);
  return (
    <>
      <Header />
      <CentreBanner />
      <State />
      <CustomerLoving />
      <Awards />
      <AppInfo />
      <Invoicedetails />
      <Otherapps />
      <Footer />
    </>
  );
}
