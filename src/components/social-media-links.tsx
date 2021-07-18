import * as React from "react";
import * as styles from "./social-media-links.module.scss";
import { OutboundLink } from "gatsby-plugin-google-analytics";
import { FaExternalLinkAlt } from "react-icons/fa";

export interface SocialMediaLinksProps {
  separator: String;
}
export class SocialMediaLinks extends React.Component<
  SocialMediaLinksProps,
  {}
> {
  public render() {
    return (
      <div>
        <span className={styles.socialMedia}>
          <OutboundLink
            className={styles.linkedIn}
            href="mailto:hello@mudmie.com"
            target="_blank"
          >
            Email <FaExternalLinkAlt />
          </OutboundLink>
          {this.getSeparator()}
          <OutboundLink
            className={styles.linkedIn}
            href="https://www.linkedin.com/in/mudmie"
            target="_blank"
          >
            LinkedIn <FaExternalLinkAlt />
          </OutboundLink>
          {this.getSeparator()}
          <OutboundLink
            className={styles.instagram}
            href="https://www.instagram.com/mudmiemee"
            target="_blank"
          >
            Instagram <FaExternalLinkAlt />
          </OutboundLink>
        </span>
      </div>
    );
  }

  private getSeparator() {
    if (this.props.separator == "NEW_LINE") {
      return <br />;
    }
    return <span> {this.props.separator} </span>;
  }
}
