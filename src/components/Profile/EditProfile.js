import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../store/actions';
import * as Yup from 'yup';
import { Formik, ErrorMessage } from 'formik';

import {
  Form,
  FormGroup,
  Label,
  Input,
  Row,
  Col,
  Container,
  Alert,
} from 'reactstrap';
import { Header3, ErrorWrapper } from './ProfileElements';
import { SubmitButton } from '../../ButtonElement';

// RegEx for phone number validation
const phoneRegExp = /^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)?$/;

const ProfileSchema = Yup.object().shape({
  name: Yup.string()
    .required('Full name is required')
    .min(3, 'Name too short')
    .max(25, 'Name too long'),
  email: Yup.string()
    .email('*Please enter a valid email address')
    .required('*Email is required'),
  title: Yup.string().required('*Title is required'),
  about: Yup.string()
    .required('*Summary is required')
    .min(3, '*Are you sure that is all?'),
  skills: Yup.string().required('*Please include your skills'),
  rate: Yup.string().required('*Please include your rate'),
  phoneNumber: Yup.string().matches(phoneRegExp, '*Phone number is not valid'),
  location: Yup.string().required('*Location is required').min(3, 'Too short'),
});

const EditProfile = ({ profile, fetchProfile, updateProfile, error }) => {
  const getProfileData = async () => {
    await fetchProfile();
  };
  // fetch profile data
  useEffect(() => {
    getProfileData();
    // eslint-disable-next-line
  }, []);

  const showNotification = () => {
    setTimeout(() => {
      <Alert color="success">
        This is a success alert with{' '}
        <a href="#" className="alert-link">
          an example link
        </a>
        . Give it a click if you like.
      </Alert>;
    }, 3000);
  };

  return (
    <Container>
      <Header3 style={{ marginBottom: '40px', marginTop: '40px' }}>
        Edit Profile
      </Header3>
      <Formik
        enableReinitialize={true}
        initialValues={{
          name: profile.fullName || '',
          email: profile.email || '',
          title: profile.title || '',
          about: profile.about || '',
          skills: profile.skills || '',
          rate: profile.rate || '',
          phoneNumber: profile.phoneNumber || '',
          profileImage: '',
          location: profile.location || '',
        }}
        validationSchema={ProfileSchema}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          setSubmitting(true);
          updateProfile(values);
          resetForm();
          showNotification();
          setSubmitting(false);
        }}
      >
        {({
          isSubmitting,
          isValid,
          values,
          handleChange,
          handleBlur,
          handleSubmit,
        }) => (
          <Form onSubmit={handleSubmit}>
            <Row form>
              <Col md={6}>
                <FormGroup>
                  <Label for="name">Full Name</Label>
                  <Input
                    style={{ color: '#000 !important' }}
                    type="text"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    name="name"
                    value={values.name}
                  />
                  <ErrorWrapper>
                    <ErrorMessage name="name" />
                  </ErrorWrapper>
                </FormGroup>
              </Col>
              <Col md={6}>
                <FormGroup>
                  <Label for="email">Email</Label>
                  <Input
                    type="Email"
                    name="email"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                  />
                  <ErrorWrapper>
                    <ErrorMessage name="email" />
                  </ErrorWrapper>
                </FormGroup>
              </Col>
            </Row>
            <Row>
              <Col md={6}>
                <FormGroup>
                  <Label for="exampleText">Title</Label>
                  <Input
                    type="text"
                    name="title"
                    placeholder="e.g software developer,photographer"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.title}
                  />
                  <ErrorWrapper>
                    <ErrorMessage name="title" />
                  </ErrorWrapper>
                </FormGroup>
              </Col>
              <Col md={6}>
                <FormGroup>
                  <Label for="exampleText">Phone Number (optional)</Label>
                  <Input
                    type="tel"
                    name="phoneNumber"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.phoneNumber}
                  />
                  <ErrorWrapper>
                    <ErrorMessage name="phoneNumber" />
                  </ErrorWrapper>
                </FormGroup>
              </Col>
            </Row>
            <Row>
              <Col md={6}>
                <FormGroup>
                  <Label for="exampleText">Core Skills</Label>
                  <Input
                    type="textarea"
                    name="skills"
                    placeholder="e.g css, c++, Nodejs, video editing"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.skills}
                  />
                  <ErrorWrapper>
                    <ErrorMessage name="skills" />
                  </ErrorWrapper>
                </FormGroup>
              </Col>
              <Col md={6}>
                <FormGroup>
                  <Label for="exampleText">Location</Label>
                  <Input
                    type="text"
                    name="location"
                    placeholder="e.g Lagos, Abuja"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.location}
                  />
                  <ErrorWrapper>
                    <ErrorMessage name="location" />
                  </ErrorWrapper>
                </FormGroup>
              </Col>
            </Row>
            <FormGroup>
              <Label for="exampleText">
                About You (Use this to show off what you can do)
              </Label>
              <Input
                type="textarea"
                name="about"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.about}
              />
              <ErrorWrapper>
                <ErrorMessage name="about" />
              </ErrorWrapper>
            </FormGroup>
            <FormGroup>
              <Label for="exampleText">Rate/ hr</Label>
              <Input
                type="textarea"
                name="rate"
                placeholder="e.g $50/hr"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.rate}
              />
              <ErrorWrapper>
                <ErrorMessage name="rate" />
              </ErrorWrapper>
            </FormGroup>
            <FormGroup>
              <Label for="exampleFile">Add profile Picture</Label>
              <Input
                type="file"
                name="profileImage"
                id="exampleFile"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.profileImage}
              />
            </FormGroup>

            <SubmitButton type="submit" disabled={isSubmitting}>
              Update
            </SubmitButton>
          </Form>
        )}
      </Formik>
    </Container>
  );
};

const mapStateToProps = ({ profile }) => ({
  profile: profile.data,
  loading: profile.loading,
  error: profile.update.error,
});

const mapDispatchToProps = {
  fetchProfile: actions.fetchProfile,
  updateProfile: actions.updateProfile,
};

export default connect(mapStateToProps, mapDispatchToProps)(EditProfile);
