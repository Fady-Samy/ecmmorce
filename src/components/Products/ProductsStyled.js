import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-left: 2.8vw;
  /* margin-top: 50px; */
`;

export const ProductItem = styled.div`
  flex: 1;
  margin: 5px;
  width: 280px;
  height: 350px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f5fbfd;
  position: relative;
`;

export const Image = styled.img`
  width: 100%;
  height: 75%;
  object-fit: contain;
`;

export const HoverButtons = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  /* left: 0; */
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
  background-color: rgba(0, 0, 0, 0.2);
  transition: opacity 0.5s ease;

  &:hover {
    opacity: 1;
  }
`;

export const Icon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px;
  padding: 6px;
  cursor: pointer;
  transition: all 0.5s ease;
  &:hover {
    background-color: #e9f5f5;
    transform: scale(1.1);
  }
`;
