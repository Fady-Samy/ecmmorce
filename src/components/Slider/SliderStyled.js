import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 87vh;
  display: flex;
  position: relative;
`;

export const ArrowContainer = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: black;
  color: white;
  position: absolute;
  left: ${({ direction }) => direction === "left" && "10px"};
  right: ${({ direction }) => direction === "right" && "10px"};
  /* z-index: 1; */
  top: 0;
  bottom: 0;
  margin: auto;
  cursor: pointer;
  opacity: 0.5;
`;

export const Slide = styled.div`
  width: 100%;
  display: flex;
  /* height: 100%; */
  align-items: center;
`;

export const ImageContainer = styled.div`
  flex: 1;

  height: 100%;
`;

export const Image = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
`;

export const InfoContainer = styled.div`
  flex: 1;
  padding: 50px;
`;

export const Titile = styled.h1`font-size: 70px;`;
export const Description = styled.p`
  font-size: 20px;
  letter-spacing: 3px;
  margin: 50px 0;
  font-weight: 500;
`;
export const Button = styled.button`
  padding: 15px 20px;
  font-size: 25px;
  background: transparent;
  cursor: pointer;
`;
