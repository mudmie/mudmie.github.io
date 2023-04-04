import * as React from "react";
import * as SHA from "sha.js";
import * as styles from "./protected-section.module.scss";
import Cookies from "universal-cookie";
import {
  Col,
  Container,
  Row,
  Form,
  FormGroup,
  Input,
  Button,
  FormFeedback,
  Label,
} from "reactstrap";
import { Project } from "../models/project";
import { Dash } from "./dash";
import { ProjectBody } from "./project-body";
import { Helmet } from "react-helmet";

export interface ProtectedSectionProps {
  isProtected: boolean;
  currentProject: Project;
}

export interface ProtectedSectionState {
  shouldShowContent: boolean;
  isInvalidPassword: boolean;
  password: string;
}

const passwordHashCookieName = "ProjectHash";

// To create one, use https://www.xorbin.com/tools/sha256-hash-calculator
const allowedHashes = [
  "18c4cff343e1341cc3b42debdc726fe6aff0e1cc8c3790108a8c76f1c141d866", // hello24
  "62d62d8d9a98a24452b8414e5546d7f9516cfe542c01ba965494387c71f0d388", // hello29
  "b8bf1a14e8a081cb982f19bc85f91645763efbb4082977085607afb7247bc30d", // hello39
  "a43da1face8364a17470b39ad51fe000c93c5a39141fe1c9558d3bedeb45baa3", // hello45
  "ae47e2f8b7c94d47d309a1f3925177d536829d2fb8865d2ebd446eb23ef9b7b3", // hello49
  "f825f420d21f99a6963b3d0dd6122b1f0a0b34976d8595a0f4de86a2ecf262a0", // hello59 
  "f90a55adfaf69f553093bf6746512d04df3e45816fcac76914bb2a9fb0d9e8c1", // hello65
  "a7d92f43e9e90cea0dd1728315ffa4820d18083c57e5239adebf6c1b3b77b475", // hello99

];

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
      shouldShowContent: false,
      isInvalidPassword: false,
      password: "",
    };
  }

  componentDidMount() {
    // If this is done in the constructor, weird things happen.
    this.setState({
      shouldShowContent: this.checkCookie(),
    });
  }

  private handlePasswordChange(event: React.ChangeEvent<HTMLInputElement>) {
    this.setState({ password: event.target.value });
  }

  private handleFormSubmit(event: React.FormEvent<HTMLFormElement>) {
    let isCorrectPassword = this.checkPassword(this.state.password);
    this.setState({
      shouldShowContent: isCorrectPassword,
      isInvalidPassword: !isCorrectPassword,
    });
    event.preventDefault();
  }

  private checkPassword(password: string): boolean {
    const passwordHash = SHA("sha256").update(password).digest("hex");
    if (this.checkPasswordHash(passwordHash)) {
      // Save the hash to cookies to maintain the session
      this.cookies.set(passwordHashCookieName, passwordHash, {
        maxAge: 7 * 24 * 60 * 60, // 7 days
        path: "/",
      });
      return true;
    }
    return false;
  }

  private checkCookie(): boolean {
    const cookieHash = this.cookies.get(passwordHashCookieName);
    return this.checkPasswordHash(cookieHash);
  }

  private checkPasswordHash(hexHash: string) {
    if (!hexHash) {
      return false;
    }

    // Log Google Analytics event
    if ((window as any).ga) {
      (window as any).ga("send", "event", {
        eventCategory: "ProjectHash",
        eventAction: "check",
        eventLabel: hexHash,
      });
    }

    return allowedHashes.indexOf(hexHash) !== -1;
  }

  public renderPasswordSection() {
    return (
      <>
        <Helmet>
          <html className="full-height" />
          <body className="theme-regular full-height" />
        </Helmet>
        <div className="container pt-5 pb-5">
          <Row className="pt-5 pb-5">
            <Col className="text-center">
              <h3>Password Protected</h3>
              <p>
                You can find the password on the resume submitted to you, or
                please contact me to request one.
              </p>
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col className="justify-content-center text-center">
              <Form
                onSubmit={this.handleFormSubmit}
                autoComplete="off"
                inline
                className="d-flex justify-content-center"
              >
                <Label for="password" hidden>
                  Password
                </Label>
                <Input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Enter a password..."
                  value={this.state.password}
                  onChange={this.handlePasswordChange}
                  autoComplete="off"
                  invalid={this.state.isInvalidPassword}
                  className={styles.passwordBox}
                />
                <Button type="submit" color="" className={styles.submitButton}>
                  Submit
                </Button>
              </Form>
              {this.state.isInvalidPassword && (
                <div className="invalid-feedback d-block">
                  Incorrect password. Please try again.
                </div>
              )}
            </Col>
          </Row>
        </div>
      </>
    );
  }

  public render() {
    if (this.props.isProtected && !this.state.shouldShowContent) {
      return this.renderPasswordSection();
    }

    return <>{this.props.children}</>;
  }
}
