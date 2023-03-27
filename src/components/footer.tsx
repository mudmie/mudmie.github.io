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
            <Col lg="12" className={`align-self-center ${styles.footerCol}`}>
            © Designed &amp; partially coded by Mudmie 2023<br />
              <SocialMediaLinks separator=" " isDarkBackground={false} />
            </Col>
          </Row>
        </Container>
      </footer>
    );
  }
}
