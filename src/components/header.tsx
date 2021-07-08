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
} from "reactstrap";
import { BackToTop } from "./back-to-top";
import * as styles from "./header.module.scss";

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
    document.addEventListener("scroll", () => {
      const isTop = window.scrollY < 10;
      if (isTop !== this.state.isTop) {
        this.setState({ isTop });
      }
    });
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
          className={`${styles.navbar} ${
            !this.state.isTop ? styles.scroll : ""
          } ${this.state.isOpen ? styles.navOpen : ""}`}
          light={!this.props.isDarkMode}
          dark={this.props.isDarkMode}
          expand="md"
          fixed="top"
        >
          <Link
            to="/"
            className="navbar-brand"
            onClick={() => {
              this.collapseNav();
            }}
          >
            <img src={withPrefix('/images/logo.png')} className={styles.logo}/>
          </Link>
          <NavbarToggler className={styles.navbarToggler} onClick={this.toggle}>
            {togglerButtonText}
          </NavbarToggler>

          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <Link
                  className={`nav-link ${styles.navLink}`}
                  to="/"
                  onClick={() => {
                    this.collapseNav();
                  }}
                >
                  home
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
                  projects
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
                  about me
                </Link>
              </NavItem>
              <NavItem>
                <OutboundLink
                  href={withPrefix("/mudmie-resume2021.pdf")}
                  className={`nav-link ${styles.navLink}`}
                  target="_blank"
                  onClick={() => {
                    this.collapseNav();
                  }}
                >
                  résumé
                </OutboundLink>
              </NavItem>
            </Nav>
          </Collapse>
          <div className={styles.backToTop}>
            <BackToTop />
          </div>
        </Navbar>
      </header>
    );
  }
}
