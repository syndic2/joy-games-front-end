import styled from 'styled-components';

export const HeroImg = styled.img`
  width: 100%;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.35);
  backdrop-filter: blur(40px);
  box-sizing: border-box;
  width: 100%;
  padding: 36px 86px 30px 70px;
`;

export const LogoImg = styled.img`
  width: 173px;
  height: 46px;
`;

export const NavbarContainer = styled.nav`
  display: flex;
  flex-direction: row;
  column-gap: 42px;
  margin-top: 20px;
`;

export const NavbarTextMenu = styled.a`
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 22px;
  text-transform: uppercase;
  color: white;
  text-decoration: none;
  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }
`;

export const LoginRegisterContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  column-gap: 25px;
  margin-top: 20px;
`;

export const LoginButton = styled.button`
  border: none;
  border-radius: 30px;
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 22px;
  text-transform: uppercase;
  color: white;
  background-color: #5D5FEF;
  box-shadow: 0px 0px 4px 4px rgba(11, 206, 255, 0.3);
  width: 158px;
  height: 41px;
  &:hover {
    cursor: pointer;
  }
`;

export const RegisterLinkButtton = styled(NavbarTextMenu)``;
