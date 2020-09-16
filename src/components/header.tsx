import { Link, withPrefix } from "gatsby";
import { OutboundLink } from "gatsby-plugin-google-analytics";
import * as React from "react";
import { Collapse, Nav, NavItem, Navbar, NavbarToggler } from "reactstrap";
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
    return (
      <header>
        <Navbar
          className={`${styles.navbar} ${
            !this.state.isTop ? styles.scroll : ""
          }`}
          light={!this.props.isDarkMode}
          dark={this.props.isDarkMode}
          expand="md"
          fixed="top"
        >
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav navbar>
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
                  href={withPrefix("/mudmie-resume2020.pdf")}
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
