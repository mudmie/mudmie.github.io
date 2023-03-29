import { Link, withPrefix } from "gatsby";
import { OutboundLink } from "gatsby-plugin-google-analytics";
import * as React from "react";
import { FaBars, FaHamburger, FaTimes } from "react-icons/fa";
import {
  Collapse,
  Nav,
  NavItem,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Container,
  Row,
  Col,
} from "reactstrap";
import { RESUME_FILE_NAME } from "./constants";
import * as styles from "./header.module.scss";
import ProgressBar from "react-scroll-progress-bar";

export interface HeaderProps {
  isDarkMode: boolean;
}
export interface HeaderState {
  isOpen: boolean;
  isTop: boolean;
}

export class Header extends React.Component<HeaderProps, HeaderState> {
  constructor(props: HeaderProps) {
    super(props);
    this.state = {
      isOpen: false,
      isTop: true,
    };
    this.toggle = this.toggle.bind(this);
    this.collapseNav = this.collapseNav.bind(this);
  }

  public toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }

  public collapseNav() {
    this.setState({
      isOpen: false,
    });
  }

  public componentDidMount() {
    // document.addEventListener("scroll", () => {
    //   const isTop = window.scrollY < 10;
    //   if (isTop !== this.state.isTop) {
    //     this.setState({ isTop });
    //   }
    // });
  }

  public render() {
    let togglerButtonText;
    if (this.state.isOpen) {
      togglerButtonText = (
        <span className={styles.navToggleClose}>
          <FaTimes />
        </span>
      );
    } else {
      togglerButtonText = (
        <span>
          <FaBars /> menu
        </span>
      );
    }
    return (
      <header>
        <Navbar
          container={false}
          className={styles.navbar}
          light={!this.props.isDarkMode}
          dark={this.props.isDarkMode}
          expand="md"
          fixed="top"
          data-sal="fade"
          data-sal-duration="300"
          data-sal-delay="200"
          data-sal-easing="ease"
          data-sal-once
        >
          <Container className={styles.navContainer}>
            <Row>
              <Col lg="2" xs="6">
                <Link
                  to="/"
                  className={`navbar-brand ${styles.navbarBrand}`}
                  onClick={() => {
                    this.collapseNav();
                  }}
                >
                  <div className={styles.brand}>
                    <img
                      src={withPrefix("/images/new-logo.svg")}
                      className={styles.logo}
                    />
                  </div>
                </Link>
              </Col>
              <Col xs="6" className="d-sm-none text-end">
                <NavbarToggler
                  className={styles.navbarToggler}
                  onClick={this.toggle}
                >
                  {togglerButtonText}
                </NavbarToggler>
              </Col>
              <Col>
                <Collapse
                  isOpen={this.state.isOpen}
                  navbar
                  className="justify-content-end"
                >
                  <Nav navbar>
                    <NavItem>
                      <Link
                        className={`nav-link ${styles.navLink}`}
                        to="/"
                        onClick={() => {
                          this.collapseNav();
                        }}
                      >
                        Home
                      </Link>
                    </NavItem>
                    <NavItem>
                      <Link
                        className={`nav-link ${styles.navLink}`}
                        to="/#projects"
                        onClick={() => {
                          this.collapseNav();
                        }}
                      >
                        Projects
                      </Link>
                    </NavItem>
                    <NavItem>
                      <Link
                        className={`nav-link ${styles.navLink}`}
                        to="/about"
                        onClick={() => {
                          this.collapseNav();
                        }}
                      >
                        About
                      </Link>
                    </NavItem>

                    <NavItem>
                      <OutboundLink
                        href={withPrefix(RESUME_FILE_NAME)}
                        className={`nav-link ${styles.navLink}`}
                        target="_blank"
                        onClick={() => {
                          this.collapseNav();
                        }}
                      >
                        Resume
                      </OutboundLink>
                    </NavItem>
                  </Nav>
                </Collapse>
              </Col>
            </Row>
          </Container>
          <div className={styles.scrollProgress}>
            {" "}
            <ProgressBar bgcolor="#FC7E55" height="10" />
          </div>
        </Navbar>
      </header>
    );
  }
}
