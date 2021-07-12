import * as React from "react";
import * as styles from "./about-title.module.scss";

export class AboutTitle extends React.Component {
  public render() {
    return (
      <>
        <h1 className={styles.aboutHeading}>Mudmie<br/>Chuthamsatid</h1>
        <p className={styles.aboutPara}>
        Product Designer. I apply systems thinking &amp; HCI knowledge to craft product experience and work cross-team to deliver the product. Recently led the design of financial tools at Jitta Wealth.

        </p>
        <p className={styles.aboutPara}>
          Currently looking for a full-time product design opportunity.
        </p>
      </>
    );
  }
}
