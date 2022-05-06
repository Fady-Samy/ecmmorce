import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 60vh;
  background-color: #fcf5f5;
`;

export const Title = styled.h1`font-size: 70px;`;

export const Description = styled.p`
  margin: 20px 0;
  font-size: 24px;
  font-weight: 300;
  letter-spacing: 2px;
`;

export const InputContainer = styled.div`
  width: 50%;
  height: 40px;
  background-color: white;
  display: flex;
  justify-content: space-between;
  border: 1px solid lightgray;
`;

export const Input = styled.input`
  flex: 8;
  outline: none;
  padding-left: 10px;
`;

export const Button = styled.button`
  flex: 1;
  border: none;
  color: white;
  background-color: teal;
`;
