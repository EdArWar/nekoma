import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import NotFound from "./pages/404/NotFound";
import AboutUsPage from "./pages/aboutUsPage/AboutUsPage";
import BlogDetail from "./pages/blogDetail/BlogDetail";
import BlogPage from "./pages/blogPage/BlogPage";
import ContactPage from "./pages/contact/ContactPage";
import HomePage from "./pages/homePage/HomePage";
import ProductDetailsContainer from "./pages/productDetail/ProductDetailsContainer";
import ShopPage from "./pages/shopPage/ShopPage";
import ShoppingCartPage from "./pages/shoppingCartPage/ShoppingCartPage";

export const useRoutes = () => {
  return (
    <Switch>
      <Route path="/" exact>
        <HomePage />
      </Route>
      <Route path="/home" exact>
        <HomePage />
      </Route>
      <Route path="/index" exact>
        <HomePage />
      </Route>
      <Route path="/shop" exact>
        <ShopPage />
      </Route>
      <Route path="/singleProduct">
        <ProductDetailsContainer />
      </Route>
      <Route path="/shopping-cart">
        <ShoppingCartPage />
      </Route>
      <Route path="/blog">
        <BlogPage />
      </Route>
      <Route path="/blog-detail">
        <BlogDetail />
      </Route>
      <Route path="/about" exact>
        <AboutUsPage />
      </Route>
      <Route path="/contact" exact>
        <ContactPage />
      </Route>
      <Route path="/notFound" exact>
        <NotFound />
      </Route>
      <Redirect to="/notFound" />
    </Switch>
  );
};
