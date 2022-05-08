import { Search } from "@mui/icons-material";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Badge } from "@mui/material";
import React from "react";
import { NavLink } from "../../GlobalStyles";

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
        <NavLink to="/">
          <Logo>LAMA.</Logo>
        </NavLink>
      </LogoSection>

      <MenuSection>
        <MenuItem>REGISTER</MenuItem>
        <MenuItem>SIGN IN</MenuItem>
        <NavLink to="/cart">
          <MenuItem>
            <Badge badgeContent={1} color="primary">
              <ShoppingCartOutlinedIcon />
            </Badge>
          </MenuItem>
        </NavLink>
      </MenuSection>
    </Container>
  );
};
