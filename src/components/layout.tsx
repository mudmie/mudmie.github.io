import * as React from "react";
import Helmet from "react-helmet";
import { Footer } from "../components/footer";
import { Header } from "../components/header";
import PageBorder from "./page-border";
import * as Styles from "./layout.module.scss";

interface LayoutProps {
  theme?: string;
  children: any;
}

export default class Layout extends React.Component<LayoutProps, {}> {
  public render() {
    return (
      <>
        <Helmet titleTemplate="%s - Projects - Mudmie Chuthamsatid - Product Designer">
          <html lang="en" />
          <meta charSet="utf-8" />
          <meta name="description" content="" />
          <meta name="keywords" content="" />
          <link
            href="https://fonts.googleapis.com/css?family=Karla:400,700|Poppins:400,700|PT+Serif:400i"
            rel="stylesheet"
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
          <body className={`theme-${this.props.theme || "regular"}`} />
        </Helmet>
        <PageBorder />
        <Header isDarkMode={this.props.theme === "dark"} />
        <main className={Styles.main}>{this.props.children}</main>
        <Footer />
      </>
    );
  }
}
