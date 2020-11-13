import React from 'react';
import {
  Container,
  Form,
  FormButton,
  FormContent,
  FormH1,
  FormInput,
  FormLabel,
  FormWrap,
  Icon,
  Text,
  Texttwo,
  TextWrapper,
} from './SignInElements';

const SignIn = () => {
  return (
    <>
      <Container>
        <FormWrap>
          <Icon to="/">Space</Icon>
          <FormContent>
            <Form>
              <FormH1>Sign In to your Account </FormH1>
              <FormLabel htmlFor="email">Email</FormLabel>
              <FormInput type="email" required />
              <FormLabel htmlFor="password">Password</FormLabel>
              <FormInput type="password" required />
              <FormButton type="submit">Sign In</FormButton>
              <TextWrapper>
                <Text>Don't have an Account? </Text>
                <Texttwo to="/sign-up"> Register</Texttwo>
              </TextWrapper>
            </Form>
          </FormContent>
        </FormWrap>
      </Container>
    </>
  );
};

export default SignIn;
