import * as React from "react";
import Helmet from "react-helmet";
import { Footer } from "../components/footer";
import { Header } from "../components/header";

interface LayoutProps {
  children: any;
}

export default class Layout extends React.Component<LayoutProps, {}> {
  public render() {
    return (
      <>
        <Helmet titleTemplate="%s - Projects - Mudmie Chuthamsatid - A designer with engineering thoughts">
          <html lang="en" />
          <meta charSet="utf-8" />
          <meta name="description" content="" />
          <meta name="keywords" content="" />
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
          <meta name="msapplication-TileColor" content="#da532c" />
          <meta name="theme-color" content="#ffffff" />
        </Helmet>
        <Header />
        <main>{this.props.children}</main>
        <Footer />
      </>
    );
  }
}
