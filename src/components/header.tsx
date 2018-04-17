import * as React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";

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
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">Mudmie</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/components/">Components</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://github.com/reactstrap/reactstrap">
                  GitHub
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </header>
    );
  }
}
