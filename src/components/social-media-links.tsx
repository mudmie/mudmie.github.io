import * as React from "react";
import * as styles from "./social-media-links.module.scss";
import { OutboundLink } from "gatsby-plugin-google-analytics";

export class SocialMediaLinks extends React.Component {
  public render() {
    return (
      <span className={styles.socialMedia}>
        <OutboundLink
          className={styles.instagram}
          href="https://www.instagram.com/mudmiemee"
          target="_blank"
        >
          Instagram
        </OutboundLink>
        {" • "}
        <OutboundLink
          className={styles.linkedIn}
          href="https://www.linkedin.com/in/mudmie"
          target="_blank"
        >
          LinkedIn
        </OutboundLink>
      </span>
    );
  }
}
