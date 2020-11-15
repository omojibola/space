import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';

export const Container = styled(Formik)`
  min-height: 692px;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  top: 0;
  z-index: 0;
  overflow: hidden;
  background: #6a63fb;
`;

export const FormWrap = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media screen and (max-width: 400px) {
    height: 80%;
  }
`;

export const Icon = styled(Link)`
  margin-left: 32px;
  margin-top: 32px;
  text-decoration: none;
  color: #fff;
  font-weight: 700;
  font-size: 32px;

  @media screen and (max-width: 480px) {
    margin-left: 16px;
    margin-top: 8px;
  }
`;

export const FormContent = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media screen and (max-width: 480px) {
    padding: 10px;
  }
`;

export const ErrorWrapper = styled.div`
  color: red;
  font-size: 10px;
  margin-top: -7px;
  margin-bottom: 13px;
`;

export const Error = styled(ErrorMessage)`
  color: red;
`;

export const StyledForm = styled(Form)`
  background: #fff;
  max-width: 400px;
  height: auto;
  width: 100%;
  z-index: 1;
  display: grid;
  margin: 0 auto;
  padding: 50px 32px;
  border-radius: 4px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.9);

  @media screen and (max-width: 400px) {
    padding: 32px 32px;
  }
`;

export const FormH1 = styled.h1`
  margin-bottom: 40px;
  color: #6a63fb;
  font-size: 20px;
  font-weight: 400;
  text-align: center;
`;

export const FormLabel = styled.label`
  margin-bottom: 8px;
  font-size: 14px;
  color: #6a63fb;
`;

export const FormInput = styled(Field)`
  padding: 10px 10px;
  border: none;
  border-radius: 4px;
  background: #eee;
  margin-bottom: 10px;

  &:focus {
    outline: none;
  }
`;

export const FormButton = styled.button`
  background: #6a63fb;
  padding: 12px 0;
  border: none;
  border-radius: 4px;
  color: #fff;
  font-size: 13px;
  cursor: pointer;
  margin-bottom: 12px;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    border: 2px solid #6a63fb;
    color: #6a63fb;
  }

  &:disabled {
    cursor: not-allowed;
  }
`;

export const TextWrapper = styled.div`
  display: flex;
`;
export const Text = styled.div`
  flex-direction:row
  text-align: left;
  margin-top: 24px;
  color: #6a63fb;
  font-size: 14px;
`;

export const Texttwo = styled(Link)`
  flex-direction: row;
  align-items: end;
  margin-top: 24px;
  color: #6a63fb;
  font-size: 14px;
  justify-content: flex-end;
  text-decoration: none;
  margin-left: 1px;
  cursor: pointer;
`;
