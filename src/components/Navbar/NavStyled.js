import styled from "styled-components";

export const Container = styled.div`
  height: 60px;
  padding: 10px 20px;
  display: flex;
  align-items: center;
  /* justify-content: space-between; */
`;

export const LeftSection = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

export const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
`;

export const SearchContainer = styled.div`
  display: flex;
  border: 0.5px solid lightgray;
  margin-left: 25px;
  padding: 5px;
  align-items: center;
`;

export const InputField = styled.input`
  border: none;
  outline: none;
`;

export const LogoSection = styled.div`
  flex: 1;
  text-align: center;
  margin-top: 15px;
`;
export const Logo = styled.h1``;

export const MenuSection = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const MenuItem = styled.li`
  font-size: 14px;
  list-style-type: none;
  margin-left: 25px;
  cursor: pointer;
`;
