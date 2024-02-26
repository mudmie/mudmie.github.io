import * as React from "react";
import * as styles from "./social-media-links.module.scss";
import { OutboundLink } from "gatsby-plugin-google-analytics";
import { FaExternalLinkAlt } from "react-icons/fa";
import { HiArrowUpRight } from "react-icons/hi2";

export interface SocialMediaLinksProps {
  separator: String;
  isDarkBackground: Boolean;
}
export class SocialMediaLinks extends React.Component<
  SocialMediaLinksProps,
  {}
> {
  public render() {
    return (
      <div className={this.props.isDarkBackground ? styles.darkBackground : ""}>
        <span className={styles.socialMedia}>
          <OutboundLink
            className={styles.email}
            href="mailto:ch.chuthamsatid@gmail.com"
            target="_blank"
          >
            Email
            <HiArrowUpRight className={styles.arrowIcon} />
          </OutboundLink>
          {this.getSeparator()}
          <OutboundLink
            className={styles.linkedIn}
            href="https://www.linkedin.com/in/mudmie"
            target="_blank"
          >
            LinkedIn
            <HiArrowUpRight className={styles.arrowIcon} />
          </OutboundLink>
        </span>
      </div>
    );
  }

  private getSeparator() {
    if (this.props.separator == "NEW_LINE") {
      return <br />;
    }
    return <span>{this.props.separator}</span>;
  }
}
