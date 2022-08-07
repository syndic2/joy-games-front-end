import React from 'react';

import {
  DividerContainer,
  Divider,
  DividerText,
  Container,
  LoginLogo,
  Card,
  CardHeader,
  CardBody,
  TitleContainerStyle,
  TitleGreet,
  TitleName,
  SocialLoginContainer,
  SocialLoginButton,
  SocialLoginIcon,
  SocialLoginButtonText,
  FormInputContainer,
  InputTextContainer,
  InputTextContentContainer,
  InputIcon,
  InputLabel,
  InputText,
  RememberMeAndForgotPasswordContainer,
  RememberMeContainer,
  RememberMeChecbox,
  RememberMeLabel,
  ForgotPasswordText,
  LoginButton,
  LoginButtonText,
  RegisterLink,
  RegisterLinkHrefText
} from './Login.styles';

const Login: React.FC = () => {
  return (
    <Container>
      {/* Login Logo */}
      <LoginLogo src='/assets/images/credential.svg' />

      {/* Card Form */}
      <Card>
        {/* Header */}
        <CardHeader>
          {/* Title */}
          <TitleContainerStyle>
            <TitleGreet>Welcome to</TitleGreet>
            <TitleName>Joy Games</TitleName>
          </TitleContainerStyle>

          {/* Social Login */}
          <SocialLoginContainer>
            <SocialLoginButton>
              <SocialLoginIcon src='/assets/icons/google.svg' />
              <SocialLoginButtonText>Login With Google</SocialLoginButtonText>
            </SocialLoginButton>
            <SocialLoginButton>
              <SocialLoginIcon src='/assets/icons/facebook.svg' />
              <SocialLoginButtonText>Login With Facebook</SocialLoginButtonText>
            </SocialLoginButton>
          </SocialLoginContainer>
        </CardHeader>

        {/* Divider */}
        <DividerContainer>
          <Divider />
          <DividerText>OR</DividerText>
          <Divider />
        </DividerContainer>

        {/* Body */}
        <CardBody>
          {/* Form Input */}
          <FormInputContainer>
            {/* Email */}
            <InputTextContainer>
              <InputIcon src='/assets/icons/email.svg' />
              <InputTextContentContainer>
                <InputLabel>Email</InputLabel>
                <InputText type='text' />
              </InputTextContentContainer>
            </InputTextContainer>

            {/* Password */}
            <InputTextContainer>
              <InputIcon src='/assets/icons/key.svg' />
              <InputTextContentContainer>
                <InputLabel>Password</InputLabel>
                <InputText type='password' />
              </InputTextContentContainer>
            </InputTextContainer>
          </FormInputContainer>

          {/* Remember Me & Forgot Password */}
          <RememberMeAndForgotPasswordContainer>
            {/* Remember Me */}
            <RememberMeContainer>
              <RememberMeChecbox type='checkbox' />
              <RememberMeLabel>Remember Me</RememberMeLabel>
            </RememberMeContainer>

            {/* Forgot Password */}
            <ForgotPasswordText>Forgot Password?</ForgotPasswordText>
          </RememberMeAndForgotPasswordContainer>

          {/* Login Button */}
          <LoginButton>
            <LoginButtonText>Login</LoginButtonText>
          </LoginButton>
        </CardBody>

        {/* Register Link  */}
        <RegisterLink>
          Don't have an account? <RegisterLinkHrefText href='/login'>Register</RegisterLinkHrefText>
        </RegisterLink>
      </Card>
    </Container>
  );
};

export default Login;
