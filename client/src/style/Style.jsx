import React, { useEffect } from "react";
import "./vendor/bootstrap/css/bootstrap.css";
import "./fonts/font-awesome-4.7.0/css/font-awesome.min.css";
import "./fonts/iconic/css/material-design-iconic-font.min.css";
import "./fonts/linearicons-v1.0.0/icon-font.min.css";
import "./vendor/animate/animate.css";
import "./vendor/css-hamburgers/hamburgers.min.css";
import "./vendor/animsition/css/animsition.min.css";
import "./vendor/select2/select2.min.css";
import "./vendor/daterangepicker/daterangepicker.css";
import "./vendor/slick/slick.css";
import "./vendor/MagnificPopup/magnific-popup.css";
import "./vendor/perfect-scrollbar/perfect-scrollbar.css";
import "./css/util.css";
import "./myFonts/font.css";
import "./css/main.css";

export default function Style({ children }) {
  return <div>{children}</div>;
}
