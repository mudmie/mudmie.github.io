import * as React from "react";
import * as styles from "./social-media-links.module.scss";
import { OutboundLink } from "gatsby-plugin-google-analytics";

export class SocialMediaLinks extends React.Component {
  public render() {
    return (
      <div>
        <span className={styles.socialMedia}>
          <OutboundLink
            className={styles.instagram}
            href="https://www.instagram.com/mudmiemee"
            target="_blank"
          >
            instagram
          </OutboundLink>
          {" • "}
          <OutboundLink
            className={styles.linkedIn}
            href="https://www.linkedin.com/in/mudmie"
            target="_blank"
          >
            linkedin
          </OutboundLink>
        </span>
        <br />
        <span className={styles.subtitle}>
          systems design engineering / university of waterloo / class of 2020
        </span>
      </div>
    );
  }
}
