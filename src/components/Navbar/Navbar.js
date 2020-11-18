import React from 'react';
import { connect } from 'react-redux';
import { FaBars } from 'react-icons/fa';
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavLinkProfile,
  NavBtn,
  NavBtnLink,
} from './NavbarElements';

const Navbar = ({ toggle, loggedIn, name }) => {
  return (
    <Nav>
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
              <NavItem>
                <NavLinkProfile to="/profile">{name}</NavLinkProfile>
              </NavItem>
              <NavItem>
                <NavLinks to="log-out">Log out</NavLinks>
              </NavItem>
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
    </Nav>
  );
};

const mapStateToProps = ({ firebase }) => ({
  loggedIn: firebase.auth.uid ? true : null,
  name: firebase.profile.fullName,
});

export default connect(mapStateToProps)(Navbar);
