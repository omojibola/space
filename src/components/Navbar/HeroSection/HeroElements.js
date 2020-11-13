import styled from 'styled-components';

export const HeroContainer = styled.div`
  background: #0c0c0c;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  height: 500px;
  position: relative;
  z-index: 1;

  :before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
        180deg,
        rgba(0, 0, 0, 0.2) 0%,
        rgba(0, 0, 0, 0.6) 100%
      ),
      linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, transparent 100%);
    z-index: 2;
  }

  @media screen and (max-width: 458px) {
    height: 700px;
  }
`;

export const HeroBg = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

export const PictureBg = styled.img`
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
  background: #232a34;
`;

export const HeroContent = styled.div`
  z-index: 3;
  max-width: 1200px;
  position: absolute;
  padding: 8px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const HeroH1 = styled.h1`
  color: #fff;
  font-size: 48px;
  text-align: center;

  @media screen and (max-width: 768px) {
    font-size: 40px;
  }

  @media screen and (max-width: 480x) {
    font-size: 32px;
  }
`;

export const HeroP = styled.p`
  margin-top: 24px;
  color: #fff;
  font-size: 20px;
  text-align: center;
  max-width: 600px;

  @media screen and (max-width: 768px) {
    font-size: 20px;
  }

  @media screen and (max-width: 480x) {
    font-size: 18px;
  }
`;

export const SearchContainer = styled.div`
  border-radius: 5px;
  background: #fff;
  width: 90%;
  margin-top: 50px;
  height: 70px;
  @media screen and (max-width: 876px) {
    width: 86%;
  }

  @media screen and (max-width: 650px) {
    height: 190px;
  }
`;

export const SearchBar = styled.input`
  border-radius: 5px;
  background: #eee;
  width: 30%;
  height: 50px;
  margin-top: 1.2%;
  margin-left: 10px;
  margin-right: 20px;
  border: none;
  text-indent: 15px;
  display: inline-block;

  &:focus {
    outline: none;
  }

  @media screen and (max-width: 876px) {
    margin-top: 10px;
    width: 28%;
  }

  @media screen and (max-width: 650px) {
    display: block;
    width: 95%;
    ::-webkit-input-placeholder {
      text-align: center;
    }

    :-moz-placeholder {
      text-align: center;
    }
  }

  @media screen and (max-width: 400px) {
    margin: 10px auto;
  }
`;
export const SearchButton = styled.button`
  border-radius: 5px;
  background: #6a63fb;
  width: 30%;
  height: 50px;
  margin-top: 1.2%;
  margin-left: 10px;
  border: none;
  color: #fff;
  cursor: pointer;
  border: none;
  outline: none;
  display: inline-block;

  @media screen and (max-width: 876px) {
    margin-top: 10px;
    width: 28%;
  }
  @media screen and (max-width: 650px) {
    display: block;
    width: 95%;
  }

  @media screen and (max-width: 400px) {
    margin-right: 10px auto;
  }
`;
