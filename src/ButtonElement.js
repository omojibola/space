import styled from 'styled-components';
import { Link as LinkS } from 'react-scroll';
import { Link } from 'react-router-dom';

export const ButtonScroll = styled(LinkS)`
  border-radius: 5px;
  background: #6a63fb;
  white-space: nowrap;
  padding: 10px 22px;
  color: #fff;
  font-size: 13px;
  outline: none;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    border: 2px solid #6a63fb;
    color: #6a63fb;
  }
`;

export const Button = styled(Link)`
  border-radius: 5px;
  background: ${({ red }) => (red ? 'red' : '#6a63fb')};
  white-space: nowrap;
  padding: 10px 22px;
  color: #fff;
  font-size: 13px;
  outline: none;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    border: ${({ red }) => (red ? '2px solid red' : '2px solid #6a63fb')};
    color: ${({ red }) => (red ? 'red' : '#6a63fb')};
  }
`;

export const SubmitButton = styled.button`
  border-radius: 5px;
  background: ${({ red }) => (red ? 'red' : '#6a63fb')};
  white-space: nowrap;
  padding: 10px 22px;
  color: #fff;
  font-size: 13px;
  outline: none;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    border: ${({ red }) => (red ? '2px solid red' : '2px solid #6a63fb')};
    color: ${({ red }) => (red ? 'red' : '#6a63fb')};
  }
`;
