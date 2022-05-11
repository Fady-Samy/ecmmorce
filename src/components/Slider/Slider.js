import {
  ArrowBackIosNewOutlined,
  ArrowForwardIosOutlined
} from "@mui/icons-material";

import React, { useState } from "react";
import { sliderItems } from "../../data/SlidesData";
import {
  ArrowContainer,
  Button,
  Container,
  Description,
  Image,
  ImageContainer,
  InfoContainer,
  Slide,
  Title,
  Wrapper
} from "./SliderStyled";

export const Slider = () => {
  let [sliderIndex, setSliderIndex] = useState(0);

  const handleClick = direction => {
    if (direction === "left") {
      setSliderIndex(
        sliderIndex === 0 ? sliderItems.length - 1 : sliderIndex - 1
      );
    } else {
      setSliderIndex(
        sliderIndex === sliderItems.length - 1 ? 0 : sliderIndex + 1
      );
    }
  };

  return (
    <Container>
      <ArrowContainer direction="left" onClick={() => handleClick("left")}>
        <ArrowBackIosNewOutlined />
      </ArrowContainer>
      <Wrapper sliderIndex={sliderIndex}>
        {sliderItems.map((slide, index) => {
          return (
            <Slide key={index}>
              <ImageContainer>
                <Image src={slide.img} />
              </ImageContainer>
              <InfoContainer>
                <Title>
                  {slide.title}
                </Title>
                <Description>
                  {slide.description}
                </Description>
                <Button>SHOP NOW</Button>
              </InfoContainer>
            </Slide>
          );
        })}
      </Wrapper>

      <ArrowContainer direction="right" onClick={() => handleClick("right")}>
        <ArrowForwardIosOutlined />
      </ArrowContainer>
    </Container>
  );
};
