import * as React from "react";
import { Col, Container, Row } from "reactstrap";
import * as styles from "./about-title.module.scss";
import { OutboundLink } from "gatsby-plugin-google-analytics";

export class AboutTitle extends React.Component {
  public render() {
    return (
      <>
        <h1 className={styles.aboutHeading}>Mudmie Chuthamsatid</h1>
        <h2 className={styles.aboutHeading}>
          crafting product experiences that <br />
          spark people's joy and simplify their lives
        </h2>
        <div className={styles.socialMedia}>
          <OutboundLink
            className={styles.linkedIn}
            href="https://www.linkedin.com/in/mudmie"
            target="_blank"
          >
            <i className="fab fa-linkedin fa-lg" />
          </OutboundLink>{" "}
          <OutboundLink
            className={styles.instagram}
            href="https://www.instagram.com/mudmiemee"
            target="_blank"
          >
            <i className="fab fa-instagram fa-lg" />
          </OutboundLink>
        </div>
      </>
    );
  }
}
