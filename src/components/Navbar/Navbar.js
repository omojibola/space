import React from 'react';
import { connect } from 'react-redux';
import { FaBars } from 'react-icons/fa';
import { Button } from '../../ButtonElement';
import * as actions from '../../store/actions';
import {
  NavS,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavBtn,
  NavBtnLink,
  NavbarImage,
} from './NavbarElements';
import {
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
} from 'reactstrap';

const Navbar = ({ toggle, loggedIn, name, image }) => {
  return (
    <NavS>
      <NavbarContainer>
        <NavLogo to="/">Space.</NavLogo>
        <MobileIcon onClick={toggle}>
          <FaBars />
        </MobileIcon>
        <NavMenu>
          <NavItem>
            <NavLinks to="/">Home</NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks to="how-it-works">How It Works</NavLinks>
          </NavItem>
          {loggedIn ? (
            <>
              <NavbarImage src={image} alt="profile" />

              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  {name}
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem href="/profile" style={{ color: '#778899' }}>
                    Dashboard
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    <Button red to="/log-out">
                      Log out
                    </Button>
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </>
          ) : (
            <>
              <NavItem>
                <NavLinks to="log-In">Log In</NavLinks>
              </NavItem>

              <NavBtn>
                <NavBtnLink to="sign-up">Get Started</NavBtnLink>
              </NavBtn>
            </>
          )}
        </NavMenu>
      </NavbarContainer>
    </NavS>
  );
};

const mapStateToProps = ({ firebase }) => ({
  loggedIn: firebase.auth.uid ? true : null,
  name: firebase.profile.fullName,
  image: firebase.profile.profileImage,
});

const mapDispatchToProps = {
  logout: actions.SignOut,
};

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
