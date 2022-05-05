import { Search } from "@mui/icons-material";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Badge } from "@mui/material";
import React from "react";

import {
  Container,
  Language,
  LeftSection,
  SearchContainer,
  InputField,
  LogoSection,
  Logo,
  MenuSection,
  MenuItem
} from "./NavStyled";

export const Navbar = () => {
  return (
    <Container>
      <LeftSection>
        <Language>EN</Language>
        <SearchContainer>
          <InputField placeholder="Search" />
          <Search />
        </SearchContainer>
      </LeftSection>

      <LogoSection>
        <Logo>LAMA.</Logo>
      </LogoSection>

      <MenuSection>
        <MenuItem>REGISTER</MenuItem>
        <MenuItem>SIGN IN</MenuItem>
        <MenuItem>
          <Badge badgeContent={4} color="primary">
            <ShoppingCartOutlinedIcon />
          </Badge>
        </MenuItem>
      </MenuSection>
    </Container>
  );
};
