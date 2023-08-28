import React from "react";
import styled from "styled-components";
import lastStand from '../assets/laststand.jpg';
import batman from '../assets/batman.jpg';
import london from '../assets/london.jpg';

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  overflow: hidden;
`;

const ImageWrapper = styled.div`
  max-height: 100%;
  width: 33.33%;
  margin: 0 10px;
  flex: 1;
  overflow: hidden;
  position: relative;

  &:hover {
    transform: scale(1.05);
    z-index: 1;
  }

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(255, 255, 255, 0.1);
    pointer-events: none;
    opacity: 0;
    transition: opacity 0.3s;
  }

  &:hover::before {
    opacity: 1;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s;
`;

const ImageSlider = () => {
  return (
    <ImageContainer>
      <ImageWrapper>
        <Image src={lastStand} alt="Last Stand" />
      </ImageWrapper>
      <ImageWrapper>
        <Image src={batman} alt="Batman" />
      </ImageWrapper>
      <ImageWrapper>
        <Image src={london} alt="Divergent" />
      </ImageWrapper>
    </ImageContainer>
  );
};

export default ImageSlider;
