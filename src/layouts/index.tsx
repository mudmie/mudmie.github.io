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
        <Helmet titleTemplate="%s - Mudmie Chuthamsatid">
          <html lang="en" />
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
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicon-16x16.png"
          />
          <link rel="manifest" href="/site.webmanifest" />
          <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
          <meta name="msapplication-TileColor" content="#da532c" />
          <meta name="theme-color" content="#ffffff" />
        </Helmet>
        <Header />
        <main>{this.props.children()}</main>
        <Footer />
      </>
    );
  }
}
