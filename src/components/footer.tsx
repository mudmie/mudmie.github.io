import * as React from "react";
import { FaSmile } from "react-icons/fa";
import { Col, Container, Row } from "reactstrap";
import * as styles from "./footer.module.scss";
import { SocialMediaLinks } from "./social-media-links";

export class Footer extends React.Component {
  public render() {
    return (
      <footer>
        <Container>
          <Row className={styles.footerRow}>
            <Col className={styles.footer} lg="6" sm="12">
              Have a good day. We all need this. <FaSmile />
            </Col>
            <Col className="text-right">
              <SocialMediaLinks />
            </Col>
          </Row>
        </Container>
      </footer>
    );
  }
}
