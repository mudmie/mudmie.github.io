import * as React from "react";
import * as SHA from "sha.js";
import * as styles from "./protected-section.module.scss";
import Cookies from "universal-cookie";
import Img from "gatsby-image";
import { Col, Container, Row } from "reactstrap";

export interface ProtectedSectionProps {
  isProtected: boolean;
  mainImage?: any;
}

export interface ProtectedSectionState {
  shouldShowContent: boolean;
  shouldShowIncorrectPassword: boolean;
  password: string;
}

const passwordHashCookieName = "ProjectHash";

export class ProtectedSection extends React.Component<
  ProtectedSectionProps,
  ProtectedSectionState
> {
  private cookies: Cookies;

  constructor(props: ProtectedSectionProps) {
    super(props);

    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.cookies = new Cookies();

    this.state = {
      shouldShowContent: this.checkCookie(),
      shouldShowIncorrectPassword: false,
      password: "",
    };
  }

  private handlePasswordChange(event: React.ChangeEvent<HTMLInputElement>) {
    this.setState({ password: event.target.value });
  }

  private handleFormSubmit(event: React.FormEvent<HTMLFormElement>) {
    let isCorrectPassword = this.checkPassword(this.state.password);
    this.setState({
      shouldShowContent: isCorrectPassword,
      shouldShowIncorrectPassword: !isCorrectPassword,
    });
    event.preventDefault();
  }

  private checkPassword(password: string): boolean {
    const passwordHash = SHA("sha256")
      .update(password)
      .digest("hex");
    if (this.checkPasswordHash(passwordHash)) {
      // Save the hash to cookies to maintain the session
      this.cookies.set(passwordHashCookieName, passwordHash, {
        maxAge: 3 * 60 * 60, // 3 hours
        path: "/",
      });
      return true;
    }
  }

  private checkCookie(): boolean {
    const cookieHash = this.cookies.get(passwordHashCookieName);
    return this.checkPasswordHash(cookieHash);
  }

  private checkPasswordHash(hexHash: string) {
    if (!hexHash) {
      return false;
    }
    return (
      hexHash ===
      "5b42389ef84139ae8643af2a1b369089a3e7298c47e590d18a201b87ebee51e8"
    );
  }

  public renderPasswordSection() {
    return (
      <Container className="mt-5 mb-5">
        <Row>
          <Col className="text-center">
            <h3>Password Protected</h3>
            <p>
              This project is protected under a NDA. Please enter a password to
              access the project.
            </p>
          </Col>
        </Row>
        <Row>
          <Col className="text-center">
            <form onSubmit={this.handleFormSubmit} autoComplete="off">
              <input
                type="password"
                placeholder="Enter a password..."
                value={this.state.password}
                onChange={this.handlePasswordChange}
                autoComplete="off"
              />{" "}
              <button type="submit">Submit</button>
              {this.state.shouldShowIncorrectPassword ? (
                <div className="text-danger">
                  Incorrect password. Please try again.
                </div>
              ) : null}
            </form>
          </Col>
        </Row>
      </Container>
    );
  }

  public render() {
    if (this.props.isProtected && !this.state.shouldShowContent) {
      return this.renderPasswordSection();
    }

    return (
      <>
        <Container>
          <Row className="justify-content-center">
            <Col lg="10">
              <Img
                alt="main project image"
                fluid={this.props.mainImage}
                className="background-theme-color"
              />
            </Col>
          </Row>
          <Row className="justify-content-center mt-3">
            <Col lg="10">
              <hr className={styles.smallDash} />
            </Col>
          </Row>
        </Container>
        {this.props.children}
      </>
    );
  }
}
