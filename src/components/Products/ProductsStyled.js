import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 2.8vw;
  /* margin-top: 50px; */
`;

export const Title = styled.p`
  text-align: center;
  font-weight: 600;
  font-size: 24px;
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

export const OverlaySection = styled.div`
  position: absolute;
  width: 100%;
  height: 15%;
  bottom: 0;
  overflow: hidden;
  /* left: 0; */
  background-color: rgba(0, 0, 0, 0.5);
  transition: all 0.5s ease;

  &:hover {
    height: 30%;
    background-color: rgba(0, 0, 0, 0.8);
  }
`;

export const Info = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px 20px 0 20px;
`;
export const ProductName = styled.p`
  color: white;
  font-weight: 500;
`;

export const ProductPrice = styled.span`color: white;`;

export const Icons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
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
