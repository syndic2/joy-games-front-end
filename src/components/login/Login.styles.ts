import styled from 'styled-components';

export const DividerContainer = styled.div`
  display: flex;
  flex-direction: row;
  column-gap: 35px;
  align-items: center;
`;

export const Divider = styled.div`
  border-bottom: 1px solid #BFBFBF;
  width: 100%;
`;

export const DividerText = styled.span`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 21px;
  color: black;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  column-gap: 200px;
  justify-content: center;
  align-items: center;
  background-color: #F4F4F4;
  padding: 42px;
`;

export const LoginLogo = styled.img`
  width: 640px;
  height: 640px;
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 47px;
  border-radius: 8px;
  background-color: white;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.08);
  width: 788px;
  padding: 44px 56px 79px;
`;

export const CardHeader = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 40px;
`;

export const CardBody = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 24px;
`;

export const TitleContainerStyle = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 3px;
`;

export const TitleGreet = styled.h2`
  font-style: normal;
  font-weight: 500;
  font-size: 36px;
  line-height: 48px;
  color: black;
  margin: 0;
`;

export const TitleName = styled.h1`
  font-style: normal;
  font-weight: 900;
  font-size: 46px;
  line-height: 62px;
  color: #6358DC;
  margin: 0;
`;

export const SocialLoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 28px;
`;

export const SocialLoginButton = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  column-gap: 20px;
  border: 0;
  border-radius: 8px;
  background-color: white;
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.11);
  padding: 25px;
  &:focus {
    outline: none;
  }
  &:hover {
    cursor: pointer;
  }
`;

export const SocialLoginIcon = styled.img`
  width: 32px;
  height: 32px;
`;

export const SocialLoginButtonText = styled.span`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 21px;
`;

export const FormInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 20px;
`;

export const InputTextContainer = styled.div`
  display: flex;
  flex-direction: row;
  column-gap: 20px;
  align-items: center;
  border-radius: 8px;
  background-color: #ECECEC;
  padding: 15px 23px;
`;

export const InputTextContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 6px;
  width: 100%;
`;

export const InputIcon = styled.img`
  width: 30px;
  height: 30px;
`;

export const InputLabel = styled.label`
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  color: black;
`;

export const InputText = styled.input`
  width: 100%;
`;

export const RememberMeAndForgotPasswordContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const RememberMeContainer = styled.div`
  display: flex;
  flex-direction: row;
  column-gap: 15px;
  align-items: center;
`;

export const RememberMeChecbox = styled.input`
  border: 1px solid #D9D9D9;
  border-radius: 4px;
  background-color: #ECECEC;
  width: 18px;
  height: 18px;
`;

export const RememberMeLabel = styled.label`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 21px;
  color: black;
`;

export const ForgotPasswordText = styled.a`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 21px;
  color: #6358DC;
`;

export const LoginButton = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border: 0;
  border-radius: 8px;
  background-color: #6358DC;
  &:focus {
    outline: none;
  }
  width: 100%;
  padding: 27px;
`;

export const LoginButtonText = styled.span`
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 21px;
  color: white
`;

export const RegisterLink = styled.span`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 21px;
  color: black;
`;

export const RegisterLinkHrefText = styled.a`
  text-decoration: none;
  color: #6358DC;
`;

