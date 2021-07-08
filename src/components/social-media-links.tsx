import * as React from "react";
import * as styles from "./social-media-links.module.scss";
import { OutboundLink } from "gatsby-plugin-google-analytics";

export class SocialMediaLinks extends React.Component {
  public render() {
    return (
      <div>
        <span className={styles.socialMedia}>
          <OutboundLink
            className={styles.linkedIn}
            href="mailto:hello@mudmie.com"
            target="_blank"
          >
            Email
          </OutboundLink>
          <br />
          <OutboundLink
            className={styles.linkedIn}
            href="https://www.linkedin.com/in/mudmie"
            target="_blank"
          >
            LinkedIn
          </OutboundLink>
          <br />
          <OutboundLink
            className={styles.instagram}
            href="https://www.instagram.com/mudmiemee"
            target="_blank"
          >
            Instagram
          </OutboundLink>
        </span>
      </div>
    );
  }
}
