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
            <Col sm="6" className={`${styles.footerLeft}`}>
              Designed & partially <br />
              coded by Mudmie
              <br />
              2023.
            </Col>
            <Col sm="6" className={`${styles.footerRight}`}>
              Let's get in touch.
             <SocialMediaLinks separator=" " isDarkBackground={false} />
            </Col>
          </Row>
        </Container>
      </footer>
    );
  }
}
