import React from 'react';

import * as Yup from 'yup';
import {
  Container,
  StyledForm,
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
  Error,
  ErrorWrapper,
} from './SignInElements';

const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .email('Please enter a valid email address')
    .required('Email is required'),
  password: Yup.string().required('Password is required'),
});
const SignIn = () => {
  return (
    <>
      <Container
        initialValues={{
          email: '',
          password: '',
        }}
        validationSchema={LoginSchema}
        onSubmit={(values, { setSubmitting }) => {
          console.log(values);
        }}
      >
        {({ isSubmitting, isValid }) => (
          <FormWrap>
            <Icon to="/">Space</Icon>
            <FormContent>
              <StyledForm>
                <FormH1>Sign In to your Account </FormH1>
                <FormLabel htmlFor="email">Email</FormLabel>
                <FormInput
                  type="email"
                  name="email"
                  placeholder="example@example.com"
                />
                <ErrorWrapper>
                  <Error name="email" />
                </ErrorWrapper>

                <FormLabel htmlFor="password">Password</FormLabel>

                <FormInput
                  type="password"
                  name="password"
                  placeholder="Your password"
                />
                <ErrorWrapper>
                  <Error name="password" />
                </ErrorWrapper>

                <FormButton type="submit" disabled={!isValid}>
                  Sign In
                </FormButton>
                <TextWrapper>
                  <Text>Don't have an Account? </Text>
                  <Texttwo to="/sign-up"> Register</Texttwo>
                </TextWrapper>
              </StyledForm>
            </FormContent>
          </FormWrap>
        )}
      </Container>
    </>
  );
};

export default SignIn;
