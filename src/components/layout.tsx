import * as React from "react";
import Helmet from "react-helmet";
import { Footer } from "../components/footer";
import { Header } from "../components/header";
import * as styles from "./layout.module.scss";

interface LayoutProps {
  theme?: string;
  children: any;
  useCustomPageMargin?: boolean;
}

export default class Layout extends React.Component<LayoutProps, {}> {
  public render() {
    return (
      <>
        <Helmet titleTemplate="%s - Projects - Mudmie Chuthamsatid - Product Designer">
          <html lang="en" />
          <meta charSet="utf-8" />
          {/* Fix this */}
          <meta name="description" content="" />
          <meta name="keywords" content="product designer, UX Designer, University of Waterloo, Waterloo, Seattle" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
          <link href="https://fonts.googleapis.com/css2?family=Karla:wght@400;700&amp;family=PT+Serif:ital@1&amp;family=Syne:wght@600&amp;display=swap" rel="stylesheet" />
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
        <Header isDarkMode={this.props.theme === "dark"} />
        <main className={this.props.useCustomPageMargin ? "" : styles.main}>
          {this.props.children}
        </main>
        <Footer />
      </>
    );
  }
}
