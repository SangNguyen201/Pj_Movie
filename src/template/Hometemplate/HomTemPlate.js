import { Fragment } from "react";
import { Route } from "react-router-dom";
import Header from "./HomeLayOut/Header/Header";
import Footer from "./HomeLayOut/Footer/Footer";

export const HomTemPlate = (props) => {
  const { Component, ...restProps } = props;
  return (
    <Route
      {...restProps}
      render={(propsRoute) => {
        return (
          <Fragment>
            <Header />
            <Component {...propsRoute} />
            <Footer />
          </Fragment>
        );
      }}
    />
  );
};
