import { Search } from "@mui/icons-material";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Badge } from "@mui/material";
import React, { Component } from "react";
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

import { connect } from "react-redux";

class Navbar extends Component {
  render() {
    console.log("Render Nav");
    const { cartLength } = this.props;

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
              <Badge badgeContent={cartLength ? cartLength : 0} color="primary">
                <ShoppingCartOutlinedIcon />
              </Badge>
            </MenuItem>
          </NavLink>
        </MenuSection>
      </Container>
    );
  }
}

//Getting the cart data from the state
function mapStateToProps({ cart }) {
  let cartProducts = cart.cartProducts;
  // console.log("Getting cart products from store");
  // console.log(cartProducts);
  //We Return the length beacuse we want th re render of the component to happen when the length changes (as we wanto to change the cart badge number)
  //so if we send the cart products as the whole array it will re render only the first time (beacuse it changes from undefined to object[array])
  return {
    cartLength: cartProducts ? cartProducts.length : null
  };
}

export default connect(mapStateToProps)(Navbar);
