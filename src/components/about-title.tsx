import * as React from "react";
import * as styles from "./about-title.module.scss";

export class AboutTitle extends React.Component {
  public render() {
    return (
      <>
        <h1 className={styles.aboutHeading}>Mudmie<br/>Chuthamsatid</h1>
        <p className={styles.aboutPara}>
          I'm a product designer and currently based in Seattle. I work cross-functionally to craft product
          experience that makes people's lives easier. Previously designed
          at Jitta Weath &amp; interned at PlanGrid/Autodesk.
        </p>
        <p className={styles.aboutPara}>
          Currently looking for a full-time product design opportunity.
        </p>
      </>
    );
  }
}
