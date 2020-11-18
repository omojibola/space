import React from 'react';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import * as Yup from 'yup';
import * as actions from '../../store/actions';
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
  Texttwo,
  TextWrapper,
  ErrorWrapper,
  Error,
} from '../Signin/SignInElements';

const SignUpSchema = Yup.object().shape({
  name: Yup.string()
    .required('Full name is required')
    .min(3, 'Name too short')
    .max(25, 'Name too long'),
  email: Yup.string()
    .email('Please enter a valid email address')
    .required('Email is required'),
  password: Yup.string()
    .required('Password is required')
    .min(8, 'Password is too short'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], `Password doesn't match`)
    .required('Please confirm password'),
});

const SignUp = ({ signUp, loading, error }) => {
  const history = useHistory();
  return (
    <>
      <Container
        initialValues={{
          name: '',
          email: '',
          password: '',
          confirmPassword: '',
        }}
        validationSchema={SignUpSchema}
        onSubmit={async (values, { setSubmitting }) => {
          await signUp(values);
          setSubmitting(false);
          if (!error) {
            history.push('/profile');
          }
        }}
      >
        {({ isSubmitting, isValid }) => (
          <FormWrap>
            <Icon to="/">Space</Icon>
            <FormContent>
              <StyledForm>
                <FormH1>Get Started</FormH1>
                <FormLabel htmlFor="name">Full Name</FormLabel>
                <FormInput type="name" name="name" placeholder="Your name" />
                <ErrorWrapper>
                  <Error name="name" />
                </ErrorWrapper>
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
                <FormLabel htmlFor="password">Confirm Password</FormLabel>

                <FormInput
                  type="password"
                  name="confirmPassword"
                  placeholder="Re-type password"
                />
                <ErrorWrapper>
                  <Error name="confirmPassword" />
                </ErrorWrapper>
                {loading ? (
                  <FormButton type="submit" disabled={isSubmitting}>
                    Creating Account...
                  </FormButton>
                ) : (
                  <FormButton type="submit" disabled={!isValid}>
                    Sign Up
                  </FormButton>
                )}
                <ErrorWrapper>{error}</ErrorWrapper>
                <TextWrapper>
                  <Texttwo to="/log-in">Back to Login</Texttwo>
                </TextWrapper>
              </StyledForm>
            </FormContent>
          </FormWrap>
        )}
      </Container>
    </>
  );
};

const mapStateToProps = ({ auth }) => ({
  loading: auth.loading,
  error: auth.error,
});

const mapDispatchToProps = {
  signUp: actions.SignUp,
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
