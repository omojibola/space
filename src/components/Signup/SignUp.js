import React from "react";
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
} from "../Signin/SignInElements";

const SignUp = () => {
  return (
    <React.Fragment>
      <Container>
        <FormWrap>
          <Icon to="/">Space</Icon>
          <FormContent>
            <Form>
              <FormH1>Get Started</FormH1>
              <FormLabel htmlFor="name">Name</FormLabel>
              <FormInput type="name" required />
              <FormLabel htmlFor="email">Email</FormLabel>
              <FormInput type="email" required />
              <FormLabel htmlFor="password">Password</FormLabel>
              <FormInput type="password" required />
              <FormLabel htmlFor="password">Confirm Password</FormLabel>
              <FormInput type="password" required />
              <FormButton type="submit">Sign Up</FormButton>
              <TextWrapper>
                <Texttwo to="/log-in">Back to Login</Texttwo>
              </TextWrapper>
            </Form>
          </FormContent>
        </FormWrap>
      </Container>
    </React.Fragment>
  );
};

export default SignUp;
