import { Link, withPrefix } from "gatsby";
import { OutboundLink } from "gatsby-plugin-google-analytics";
import * as React from "react";
import { Collapse, Nav, NavItem, Navbar, NavbarToggler } from "reactstrap";
import * as styles from "./header.module.scss";
import * as logo from "../../static/images/Mudmie.png";

export interface HeaderProps {
  isDarkMode: boolean;
}
export interface HeaderState {
  isOpen: boolean;
}

export class Header extends React.Component<HeaderProps, HeaderState> {
  constructor(props: HeaderProps) {
    super(props);
    this.state = {
      isOpen: false,
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

  public render() {
    return (
      <header>
        <Navbar
          className={`${styles.navbar} ${styles.scroll}`}
          light={!this.props.isDarkMode}
          dark={this.props.isDarkMode}
          expand="md"
          fixed="top"
        >
          <Link
            to="/"
            className="navbar-brand d-none d-md-block"
            onClick={() => {
              this.collapseNav();
            }}
          >
            <div className={styles.brandCircle} />
            <div className={styles.brandName}>
              mudmie
              <br />
              chuthamsatid
            </div>
          </Link>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <Link
                  className={`nav-link ${styles.navLink}`}
                  to="/#about"
                  onClick={() => {
                    this.collapseNav();
                  }}
                >
                  about
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
                  to="/nice-break"
                  onClick={() => {
                    this.collapseNav();
                  }}
                >
                  stories
                </Link>
              </NavItem>
              <NavItem>
                <OutboundLink
                  href={withPrefix("/Mudmie_Chuthamsatid_Resume.pdf")}
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
        </Navbar>
      </header>
    );
  }
}
