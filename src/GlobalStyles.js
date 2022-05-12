import styled from "styled-components";
import { Link } from "react-router-dom";

//React Router Link (remove color of visited)
export const NavLink = styled(Link)`

  color: black;
  text-decoration: none;
  &:hover {
    color: black;
  }
`;
