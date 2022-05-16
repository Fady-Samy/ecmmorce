import styled from "styled-components";

export const Container = styled.div`
  padding: 50px;
  display: flex;
`;

//Left Column
export const ProductImageContainer = styled.div`flex: 1;`;
export const Image = styled.img`
  width: 100%;
  height: 90vh;
  object-fit: cover;
`;

//Right Column
export const ProductInfoContainer = styled.div`
  flex: 1;
  padding: 0 50px;
`;
export const Name = styled.h1`
  font-weight: 200;
  margin-bottom: 20px;
`;
export const Description = styled.div`
  margin-bottom: 20px;
  font-size: 18px;
  font-weight: 150;
  letter-spacing: 2px;
`;
export const Price = styled.div`
  font-size: 40px;
  font-weight: 100;
`;

export const FiltersContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 40px;
  width: 60%;
`;
export const Filter = styled.div`
  display: flex;
  align-items: center;
`;
export const FilterText = styled.span`
  font-size: 20px;
  margin-right: 20px;
`;
export const FilterColor = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: ${({ color }) => color};
  margin-right: 10px;
  cursor: pointer;
`;
export const Select = styled.select`padding: 10px;`;

export const Option = styled.option``;

export const AddToCartContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 50px;
  width: 60%;
`;

export const QuantityContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const Icon = styled.div`cursor: pointer;`;
export const Quantity = styled.div`
  width: 30px;
  height: 30px;
  border: 1px solid lightgray;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 5px;
`;

export const AddButton = styled.button`
  border: 2px solid teal;
  padding: 15px;
  background-color: transparent;
  font-weight: 500;
  font-size: 18px;
  cursor: pointer;
`;

export const ActionsContainer = styled.div`
  display: flex;
  align-items: flex-start;
`;
