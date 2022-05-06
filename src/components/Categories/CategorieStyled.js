import styled from "styled-components";

export const Container = styled.div`
  /* width: 100%; */
  display: flex;
  justify-content: space-between;
  margin: 10px;
`;

export const Category = styled.div`
  flex: 1;
  position: relative;
  height: 70vh;
  padding: 5px;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const Info = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.h1`
  color: white;
  font-size: 40px;
`;

export const Button = styled.button`
  margin-top: 10px;
  padding: 10px;
  background-color: white;
  border: none;
  color: gray;
  font-weight: 600;
`;
