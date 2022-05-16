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
  margin: 5px;
  width: 280px;
  height: 300px;
  /* border: 0.5px solid rgba(224, 224, 224); */
  /* background-color: #f5fbfd; */
  /* display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start; */
  position: relative;
  /* box-shadow: 5px 10px rgba(220, 221, 218); */
`;

export const Image = styled.img`
  width: 100%;
  height: 75%;
  padding: 10px;
  object-fit: contain;
  background-image: linear-gradient(
    to bottom right,
    rgba(215, 216, 214, 1),
    rgba(220, 221, 218, 0)
  );
`;

// export const OverlaySection = styled.div`
//   position: absolute;
//   width: 100%;
//   height: 15%;
//   bottom: 0;
//   overflow: hidden;
//   /* left: 0; */
//   background-color: rgba(0, 0, 0, 0.5);
//   transition: all 0.5s ease;

//   &:hover {
//     height: 30%;
//     background-color: rgba(0, 0, 0, 0.8);
//   }
// `;

export const Info = styled.div`
  width: 100%;
  margin: 10px 0 10px 10px;
  /* display: flex;
  justify-content: space-between; */
  /* padding: 10px 20px; */
`;
export const ProductName = styled.p`
  font-weight: 500;
  margin: 0;
`;

export const ProductPrice = styled.p``;

export const Icons = styled.div`
  position: absolute;
  top: 0;
`;

export const Icon = styled.button`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: none;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px;
  padding: 6px;
  transition: all 0.5s ease;
  &:hover {
    background-color: #e9f5f5;
    transform: scale(1.1);
  }
`;
