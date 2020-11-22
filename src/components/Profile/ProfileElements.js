import styled from 'styled-components';

export const ProfileWrapper = styled.div`
max-width:1100px;
margin-right:auto;
margin-left:auto;
padding:80px;
background: #fdfdfe;

}
`;

export const ProfileRow = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 100%;
  flex: 1;
`;

export const Image = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 50%;
`;

export const Text = styled.p`
  color: #778899;
  font-size: 16px;
  line-height: 16px;
  font-weight: 400;
  border-spacing: 1.4px;
  margin-bottom: 16px;
  color: #778899;
`;

export const Header1 = styled.h1`
  color: #000;
  line-height: 16px;
  margin-top: 30px;
`;
export const Header3 = styled.h3`
  color: #000;
  line-height: 16px;
  margin-top: 30px;
`;

export const ProfileFormContainer = styled.div`
  padding: 50px 100px;
`;

export const ErrorWrapper = styled.div`
  color: red;
  font-size: 15px;
  margin-bottom: 13px;
`;
