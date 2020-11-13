import React from 'react';
import image from '../../../images/image-1.jpeg';
import {
  PictureBg,
  HeroBg,
  HeroContainer,
  HeroContent,
  HeroH1,
  HeroP,
  SearchContainer,
  SearchBar,
  SearchButton,
} from './HeroElements';

const HeroSection = () => {
  return (
    <HeroContainer id="home">
      <HeroBg>
        <PictureBg src={image} />
      </HeroBg>
      <HeroContent>
        <HeroH1> Hire Freelancers, Get Your Work done</HeroH1>
        <HeroP>
          Get Matched with top talents from our pool of skilled freelancers, in
          any category
        </HeroP>
        <SearchContainer>
          <SearchBar placeholder="Title or Keywords..." />
          <SearchBar placeholder="City or Location" />
          <SearchButton>Search</SearchButton>
        </SearchContainer>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
