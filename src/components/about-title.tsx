import * as React from "react";
import { Col, Container, Row } from "reactstrap";
import * as styles from "./about-title.module.scss";
import { OutboundLink } from "gatsby-plugin-google-analytics";
import { FaLinkedin, FaInstagram } from "react-icons/fa";

export class AboutTitle extends React.Component {
  public render() {
    return (
      <>
        <h1 className={styles.aboutHeading}>Mudmie&nbsp;Chuthamsatid</h1>
        <h2 className={styles.aboutHeading}>
          product designer.
        </h2>
        <p className={styles.aboutPara}>
        <span className={styles.bold}>Currently looking for a full-time product design role. </span>
        <br/>
        Previously at{" "}
          <OutboundLink href="https://www.jitta.com/en" target="_blank">
            Jitta Wealth
          </OutboundLink>
          ,{" "}
          <OutboundLink href="https://hackthenorth.com" target="_blank">
            Hack the North
          </OutboundLink>
          ,{" "}
          <OutboundLink href="https://www.plangrid.com" target="_blank">
            PlanGrid/Autodesk
          </OutboundLink>.
        </p>
        {/* <div className={styles.socialMedia}>
          <OutboundLink
            className={styles.linkedIn}
            href="https://www.linkedin.com/in/mudmie"
            target="_blank"
          >
            <FaLinkedin size={24} />
          </OutboundLink>{" "}
          <OutboundLink
            className={styles.instagram}
            href="https://www.instagram.com/mudmiemee"
            target="_blank"
          >
            <FaInstagram size={24} />
          </OutboundLink>
        </div> */}
      </>
    );
  }
}
