import "bootstrap/dist/css/bootstrap.min.css";
import * as React from "react";
import "../styles/global.scss";
import Helmet from "react-helmet";
import { Footer } from "../components/footer";
import { Header } from "../components/header";

interface DefaultLayoutProps {
  children: any;
}

export default class DefaultLayout extends React.Component<
  DefaultLayoutProps,
  {}
> {
  public render() {
    return (
      <>
        <Helmet>
          <meta charSet="utf-8" />
          <meta name="description" content="" />
          <meta name="keywords" content="" />
          <title>Mudmie Chuthamsatid</title>
          <link
            href="https://fonts.googleapis.com/css?family=Raleway:300,400,700"
            rel="stylesheet"
          />
          <script
            src="https://use.fontawesome.com/releases/v5.0.7/js/all.js"
            defer
          />
        </Helmet>
        <Header />
        <main>{this.props.children()}</main>
        <Footer />
      </>
    );
  }
}
