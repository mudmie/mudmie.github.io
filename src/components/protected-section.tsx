import * as React from "react";
import * as SHA from "sha.js";
import * as styles from "./protected-section.module.scss";
import Cookies from "universal-cookie";
import Img from "gatsby-image";
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

export interface ProtectedSectionProps {
  isProtected: boolean;
  currentProject: Project;
  mainImage?: any;
}

export interface ProtectedSectionState {
  shouldShowContent: boolean;
  isInvalidPassword: boolean;
  password: string;
}

const passwordHashCookieName = "ProjectHash";

// To create one, use https://www.xorbin.com/tools/sha256-hash-calculator
const allowedHashes = [
  "5b42389ef84139ae8643af2a1b369089a3e7298c47e590d18a201b87ebee51e8", // bubblegum
  "83ac1f81c821f49dcd69ad10cce8b57c86ce0902e15776aadc2edbe26925bd33", // sunglow
  "e13aca4535aeb2e3e048bface0b25fac23d65e43b6f0c46c66cf38ba3bccdd0d", // inbloom
  "bca53ada79cb1febc267110d0d890bf862ddf31698e44835aa062b5db7e2404d", // pixiedust
  "8d607a0cf2052c03e793bdbef576b17df8c7a99626d8c915f843143c033e4ed7", // moonchild
  "e24423c37fc0312c31af79fbdf5260e50f2e96c13c3c2a1dd218d12001fe39d1", // starrynight
  "b04da4304f0ff90bd7038990de132474654ebcb2ca119264da9327b02f162005", // littlestar
  "c0dcbf063af60b2e84613079d09be076979a91b8e03a237cc3c67753b7701eba", // candycane
  "3841e6d4e4cbdaf8adffeeacc43911e00edad08bea26f62ecd77b25130173dd0", // designbetter
  "598427034543b344eacf5b60ac94d5a9c44f3dc6786ef7b1893e2dc8842dbccf", // bumblebee
  "767c5ba5803c073d17815a2bdda729a8f0ba3c9d3c28f66f1f593c3349e10d31", // drawsomething
  "a97d087a019c760196f813f851f6d8bafe3d1f9fcfa69229a04bde71ce339148", // jetsetter
  "dc8e5ea02040747f4cf5d10ea7dc5c4b32aa44b71e7adea498421b69772f6bd4", // cornflower
  "3ad003a7823a1b94b7f0fc3d1c766473064adf77fcca0f6ac8ec3fd03f6585c4", // magicwand
  "7b8a9aba12189b67d5acfbc4bc3e30368b00cec3889d2e0ab8efe885a911dfae", // skyfall
  "7d8de942f2483e3fd3c0a412d166b50a882eeeb2f291a9099d2096778596f420", // jellybeam
  "c9000d331c968e21288a961065842598ba5f476366b777049eab1f8780d9aa15", // sketchtogether
  "9f075e1469df2af1bd79447c7de3eda5d121f0644456afdefd156fa98e93d3e5", // pricklypear
  "acb7b3b2eec3e44cdbc9fd3031d11affb356af1360d5049b69d406c203ae0059", // birthdaywish
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
      <aside className="container mt-5 mb-5">
        <Row>
          <Col className="text-center">
            <h3>Password Protected</h3>
            <p>
              This project is protected under a NDA. Please enter a password to
              access the project. <br />
              You can find the password on the resume submitted to you, or
              please contact me to request for the password.
            </p>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col>
            <Form
              onSubmit={this.handleFormSubmit}
              autoComplete="off"
              inline
              className="justify-content-center"
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
              />{" "}
              <Button type="submit" color="" className="ml-2">
                Submit
              </Button>
              <FormFeedback className="text-center">
                Incorrect password. Please try again.
              </FormFeedback>
            </Form>
          </Col>
        </Row>
      </aside>
    );
  }

  public render() {
    if (this.props.isProtected && !this.state.shouldShowContent) {
      return this.renderPasswordSection();
    }

    return (
      <div>
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
          <Row className="justify-content-center mt-2">
            <Col lg="10">
              <div>{this.props.currentProject.description}</div>
            </Col>
          </Row>
          <Row className="justify-content-center mt-3">
            <Col lg="10">
              <Dash />
            </Col>
          </Row>
        </Container>
        {this.props.children}
      </div>
    );
  }
}
