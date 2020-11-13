import React from 'react';
import {
  SidebarContainer,
  SideBtnWrap,
  SidebarLink,
  SidebarMenu,
  SidebarWrapper,
  CloseIcon,
  Icon,
  SidebarRoute,
} from './SidebarElements';

const Sidebar = ({ toggle, isOpen }) => {
  return (
    <>
      <SidebarContainer isOpen={isOpen} onClick={toggle}>
        <Icon onClick={toggle}>
          <CloseIcon />
        </Icon>
        <SidebarWrapper>
          <SidebarMenu>
            <SidebarLink to="/">Home</SidebarLink>
          </SidebarMenu>
          <SidebarMenu>
            <SidebarLink to="/how-it-works">How It Works</SidebarLink>
          </SidebarMenu>
          <SidebarMenu>
            <SidebarLink to="/log-in">Log in</SidebarLink>
          </SidebarMenu>
          <SideBtnWrap>
            <SidebarRoute to="/sign-up">Get Started</SidebarRoute>
          </SideBtnWrap>
        </SidebarWrapper>
      </SidebarContainer>
    </>
  );
};

export default Sidebar;
