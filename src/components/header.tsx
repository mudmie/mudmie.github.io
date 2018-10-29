import { Link, withPrefix } from "gatsby";
import { OutboundLink } from "gatsby-plugin-google-analytics";
import * as React from "react";
import { Collapse, Nav, NavItem, Navbar, NavbarToggler } from "reactstrap";
import * as styles from "./header.module.scss";
import * as logo from "../../static/images/Mudmie.png";

export interface HeaderState {
  isOpen: boolean;
  isTop: boolean;
}

export class Header extends React.Component<{}, HeaderState> {
  constructor(props: any) {
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
          color="light"
          light
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
            <img src={logo} alt="Mudmie" className={styles.logo} />
          </Link>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <Link
                  className={`nav-link ${styles.navLink}`}
                  to="/#home"
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
                <OutboundLink
                  href={withPrefix("/cchutham.pdf")}
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
