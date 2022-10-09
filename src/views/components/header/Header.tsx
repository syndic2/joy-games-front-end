import React, { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

import {
  HeroImg,
  Container,
  LogoImg,
  NavbarContainer,
  NavbarTextMenu,
  LoginRegisterContainer,
  RegisterLinkButtton,
  LoginButton
} from './Header.styles';

const Header: React.FC = () => {
  const navigate = useNavigate();

  const navbarLinks: { text: string, link: string }[] = [
    { text: 'About', link: '/' },
    { text: 'Store', link: '/' },
    { text: 'Gamebox', link: '/' },
    { text: 'Token', link: '/' },
    { text: 'Staking', link: '/' },
    { text: 'Docs', link: '/' }
  ];

  const onLoginClick = useCallback(() => navigate('login'), []);

  return (
    <>
      <HeroImg src="/assets/images/hero.png" />
      <Container>
        <LogoImg src='/assets/images/joy-games-logo.svg' />
        <NavbarContainer>
          {navbarLinks.map((navbarLink, index) => (
            <NavbarTextMenu
              key={`navbar-link-${index}`}
              href={navbarLink.link}>
              {navbarLink.text}
            </NavbarTextMenu>
          ))}
        </NavbarContainer>
        <LoginRegisterContainer>
          <RegisterLinkButtton>Register</RegisterLinkButtton>
          <LoginButton onClick={onLoginClick}>Login</LoginButton>
        </LoginRegisterContainer>
      </Container>
    </>
  );
};

export default Header;
