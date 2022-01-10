import {
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  Nav,
  NavItem,
  NavLink,
  // UncontrolledDropdown,
  // DropdownToggle,
  // DropdownMenu,
  // DropdownItem,
  // NavbarText,
} from "reactstrap";
export const Header = () => {
  return (
    <div>
      <Navbar color="light" expand="md" light>
        {/* <NavbarBrand href="/">reactstrap</NavbarBrand> */}
        <NavbarToggler
          onClick={() => {
            console.log("toggle");
          }}
        />
        <Collapse navbar>
          <Nav className="me-auto" navbar>
            <NavItem>
              <NavLink
                onClick={() => {
                  console.log("test");
                }}
              >
                Product Management
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                onClick={() => {
                  console.log("test 2");
                }}
              >
                Campaign Management
              </NavLink>
            </NavItem>
            {/* <UncontrolledDropdown inNavbar nav>
              <DropdownToggle caret nav>
                Options
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>Option 1</DropdownItem>
                <DropdownItem>Option 2</DropdownItem>
                <DropdownItem divider />
                <DropdownItem>Reset</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown> */}
          </Nav>
          {/* <NavbarText>Simple Text</NavbarText> */}
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
