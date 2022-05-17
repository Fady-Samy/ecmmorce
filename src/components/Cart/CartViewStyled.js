import styled from "styled-components";

export const Container = styled.div`margin: 30px 20px;`;

export const Title = styled.h1`
  font-weight: 200;
  text-align: center;
  font-size: 45px;
`;

export const FirstRow = styled.div`
  margin: 20px 0;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export const GoTo = styled.a`
  margin-left: 40px;
  text-decoration: underline;
  font-size: 18px;
`;

export const ProductSummaryContainer = styled.div`display: flex;`;

export const OrderProducts = styled.div`
  flex: 3;
  height: 85vh;
  overflow: auto;
`;

export const Product = styled.div`
  display: flex;
  /* justify-content: space-between; */
`;

export const ProductDetails = styled.div`
  flex: 2;
  display: flex;
`;
export const Image = styled.img`width: 200px;`;
export const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

export const ProductName = styled.span``;

export const ProductId = styled.span``;

export const ProductColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${({ color }) => color};
`;

export const ProductSize = styled.span``;

export const Button = styled.button`
  width: ${({ type }) => type === "checkout" && "100%"};
  font-size: ${({ type }) => type === "checkout" && "18px"};
  padding: 10px 15px;
  background-color: ${({ type }) => (type === "checkout" ? "black" : "white")};
  color: ${({ type }) => (type === "checkout" ? "white" : "black")};
  font-weight: 500;
  letter-spacing: 1px;
  border: ${({ type }) => (type === "checkout" ? "none" : "2px solid black")};
`;
export const PriceDetails = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

export const Icon = styled.div`cursor: pointer;`;

export const ProductAmount = styled.div`
  font-size: 24px;
  margin: 5px 10px;
`;

export const ProductPrice = styled.div`
  font-size: 30px;
  font-weight: 200;
`;

export const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 1px;
`;

export const OrderSummary = styled.div`
  flex: 1;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 20px;
  height: 80vh;
`;

export const SummaryTitle = styled.h1`
  font-weight: 300;
  text-align: center;
`;

export const SummaryItem = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 30px 0;
  font-size: ${({ type }) => (type === "total" ? 24 : 18)}px;
  font-weight: ${({ type }) => type === "total" && 700};
`;

export const SummaryItemText = styled.span``;

export const SummaryItemPrice = styled.span``;

export const EmptyCartContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const EmptyImage = styled.img`height: 40vh;`;

export const EmptyTextHeading = styled.p`font-weight: bold;`;

export const EmptyTextDescription = styled.p`color: rgb(212, 211, 214);`;
