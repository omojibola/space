import React from 'react';
import { Button } from '../../../ButtonElement';
import {
  Column1,
  InfoContainer,
  InfoRow,
  InfoWrapper,
  TextWrapper,
  Heading,
  Subtitle,
  Column2,
  ImgWrap,
  Img,
  TopLine,
  BtnWrap,
} from './InfoElements';

const InfoSection = ({
  imgStart,
  img,
  alt,
  topLine,
  headline,
  description,
  buttonLabel,
}) => {
  return (
    <>
      <InfoContainer>
        <InfoWrapper>
          <InfoRow imgStart={imgStart}>
            <Column1>
              <TextWrapper>
                <TopLine>{topLine}</TopLine>
                <Heading>{headline}</Heading>
                <Subtitle>{description}</Subtitle>
                <BtnWrap>
                  <Button
                    to="/log-in"
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact={true}
                    offset={-80}
                  >
                    {buttonLabel}
                  </Button>
                </BtnWrap>
              </TextWrapper>
            </Column1>
            <Column2>
              <ImgWrap>
                <Img src={img} alt={alt} />
              </ImgWrap>
            </Column2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  );
};

export default InfoSection;
