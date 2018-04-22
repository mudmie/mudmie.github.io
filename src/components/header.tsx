import { OutboundLink } from "gatsby-plugin-google-analytics";
import * as React from "react";
import {
  Collapse,
  Nav,
  NavItem,
  NavLink,
  Navbar,
  NavbarToggler,
} from "reactstrap";
import * as styles from "./header.scss";
import { withPrefix } from "gatsby-link";

export interface HeaderState {
  isOpen: boolean;
}

export class Header extends React.Component<{}, HeaderState> {
  constructor(props: any) {
    super(props);
    this.state = {
      isOpen: false,
    };
    this.toggle = this.toggle.bind(this);
  }

  public toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }
  public render() {
    return (
      <header>
        <Navbar
          className={styles.navbar}
          color="light"
          light
          expand="md"
          fixed="top"
        >
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink className={styles.navLink} href="/">
                  home
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className={styles.navLink} href="/components/">
                  about
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className={styles.navLink} href="/components/">
                  projects
                </NavLink>
              </NavItem>
              <NavItem>
                <OutboundLink
                  href={withPrefix("/resume.pdf")}
                  className={`nav-link ${styles.navLink}`}
                >
                  resume
                </OutboundLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </header>
    );
  }
}
