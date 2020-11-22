import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NavS = styled.nav`
  background-color: #fdfdfe;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;

  z-index: 10;

  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  z-index: 10;
  width: 100%;
  padding: 0 70px;
  box-shadow: 0 3px 8px -2px rgba(0, 0, 0, 0.2);
  position: fixed;
  background-color: #fdfdfe;
`;

export const NavLogo = styled(Link)`
  color: #6a63fb;
  justify-self: flex-start;
  cursor: pointer;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  font-weight: bold;
  text-decoration: none;
`;

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.5rem;
    cursor: pointer;
    color: #6a63fb;
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  margin-right: -22px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavItem = styled.li`
  height: 80px;
  margin: 0 10px;
`;

export const NavLinks = styled(Link)`
  color: #778899;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  font-weight: 500;

  &.active: {
    color: #6a63fb;
  }
  &:hover {
    transition: all 0.2s ease-in-out;
    color: #6a63fb;
  }
`;

export const NavLinkProfile = styled(Link)`
  color: #000;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  font-weight: 500;
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const Text = styled.h4`
  color: black;
`;
export const NavBtnLink = styled(Link)`
  border-radius: 5px;
  background: #6a63fb;
  white-space: nowrap;
  padding: 10px 22px;
  color: #fff;
  font-size: 13px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  margin-left: 20px;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    border: 2px solid #6a63fb;
    color: #6a63fb;
  }
`;

export const NavbarImage = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-left: 10px;
`;
