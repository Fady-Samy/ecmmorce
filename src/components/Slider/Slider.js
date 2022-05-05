import {
  ArrowBackIosNewOutlined,
  ArrowForwardIosOutlined
} from "@mui/icons-material";

import React from "react";
import {
  ArrowContainer,
  Button,
  Container,
  Description,
  Image,
  ImageContainer,
  InfoContainer,
  Slide,
  Titile
} from "./SliderStyled";

export const Slider = () => {
  return (
    <Container>
      <ArrowContainer direction="left">
        <ArrowBackIosNewOutlined />
      </ArrowContainer>
      <Slide>
        <ImageContainer>
          <Image src="/assets/images/fashion1.jpg" />
        </ImageContainer>
        <InfoContainer>
          <Titile>SUMMER SALE</Titile>
          <Description>
            DON'T COMPROMISE ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVALS.
          </Description>
          <Button>SHOP NOW</Button>
        </InfoContainer>
      </Slide>
      <ArrowContainer direction="right">
        <ArrowForwardIosOutlined />
      </ArrowContainer>
    </Container>
  );
};
