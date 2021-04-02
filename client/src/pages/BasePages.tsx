import React from "react";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import { useRoutes } from "./../routes";

export default function BasePage() {
  const routes = useRoutes();
  return (
    <div>
      <Header />
      {routes}
      <Footer />
    </div>
  );
}
