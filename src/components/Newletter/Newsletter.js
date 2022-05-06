import { Send } from "@mui/icons-material";
import React from "react";
import {
  Button,
  Container,
  Description,
  Input,
  InputContainer,
  Title
} from "./NewsletterStyled";

export const Newsletter = () => {
  return (
    <Container>
      <Title>Newsletter</Title>
      <Description>Get timely updates from your favorite products.</Description>
      <InputContainer>
        <Input placeholder="Enter your email" />
        <Button>
          <Send />
        </Button>
      </InputContainer>
    </Container>
  );
};
