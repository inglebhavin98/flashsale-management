import { Link } from 'react-router-dom'
import {
  Navbar,
  // NavbarBrand,
  NavbarToggler,
  Collapse,
  Nav,
  NavItem,
  NavLink
  // UncontrolledDropdown,
  // DropdownToggle,
  // DropdownMenu,
  // DropdownItem,
  // NavbarText,
} from 'reactstrap'
export const Header = () => {
  console.log(window.location.href)
  return (
    <div>
      <Navbar color="light" expand="md" light>
        {/* <NavbarBrand href="/">reactstrap</NavbarBrand> */}
        <NavbarToggler
          onClick={() => {
            console.log('toggle')
          }}
        />
        <Collapse navbar>
          <Nav className="me-auto" navbar>
            <NavItem style={{ margin: '0 5px 0 10px' }}>
              <Link to="/products">Product Management</Link>
            </NavItem>
            <NavItem style={{ margin: '0 5px 0 10px' }}>
              <Link to="/campaigns"> Campaign Management </Link>
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
  )
}

export default Header
