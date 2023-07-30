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
  "0a4ef253e3fef22cb9d3bc5280386f9f2d1cf351da6582d8254659d1b27ea0b3", // popcorn
  "2d5aa61d4b8402a42cd800c364685a69972a19ecf404bb8629e43cb5f63771ad", // figma29
  "0e4e00f954852e24a800860c2c6771bd9379f394c280fca18b51b46080705d3f", // substack29
  "5b42389ef84139ae8643af2a1b369089a3e7298c47e590d18a201b87ebee51e8", // bubblegum
  "1e9cc37678c0112d7a394909256c2a5998a6e57e2b0d82209900e1456e51b7eb", // jupiter
  "35af25f5a5fdac6401dd4baf949794b59db80168d69c80e7f2cfd83999e2feff", // midnight
  "8f398886c326b5f8f07b20ac250c87de6723e062474465273fe1524f2b9092fa", // sunflower
  "0204ba20e13ec324fca0e179c84c07db1aaf35c10e1fafd37795a638dc00fa5c", // gummybear
  "c6cb50e7eea0df1fd3eaf52ada2358f5423afd7c0b5ee2395231a9b3208ffcaf", // unicorn
  "0829103205fbe7963996bfacbaeaab326bb8eded5bd97e9b677f7c05fbe44b5b", // sunset
  "1e30b14a8001c7393bcd26b1d6e093a55b527c57edbc4676ce8f3077a777df6f", // stardust
  "90e62b92a956add6e1c3871b7f592616665e610f12c6468eaad9533ef50834bc", // almond
  "0422d42c689b7e8046dba2d7042e855f6d21e04464bab168fd263f5b10f893ed", // birthday
  "7e8eea5cc60980270c9ceb75ce8c087d48d726110fd3d17921f774eefd8e18d8", // california
  "1da0672bd372f181d79fd5391aaeda10d256ebfd95ddb09ab9b51e52affbdbfc", // starlight 
  "0edbdffac1b7169c3d9d2702dc280aa30796941d2c56d9cf8f49ecda2f8ff623", // twilight





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
