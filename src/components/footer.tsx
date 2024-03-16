import * as React from "react";
import { FaRegSmile } from "react-icons/fa";
import { Col, Container, Row } from "reactstrap";
import * as styles from "./footer.module.scss";
import { SocialMediaLinks } from "./social-media-links";

export class Footer extends React.Component {
  public render() {
    return (
      <footer className={styles.section}>
        <Container className={styles.container}>
          <Row className={styles.footerRow}>
            <Col xs="6" className={`${styles.footerLeft}`}>
              Designed & coded
              <br />
              by Mudmie 2024 ✨
            </Col>
            <Col xs="6" className={`${styles.footerRight}`}>
              Let's connect 👀
              <SocialMediaLinks
                separator="&nbsp;&nbsp;&nbsp;&nbsp;"
                isDarkBackground={false}
              />
            </Col>
          </Row>
        </Container>
      </footer>
    );
  }
}
