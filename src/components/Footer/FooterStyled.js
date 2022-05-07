import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  margin: 30px;
`;

//Left Column

export const LeftSection = styled.div`flex: 1;`;
export const Logo = styled.h1``;

export const Description = styled.p`
  margin: 20px 0;
  width: 70%;
`;

export const SocialConatiner = styled.div`display: flex;`;

export const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #${({ color }) => color};
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 20px;
`;

//Middle Column
export const MiddleSection = styled.div`flex: 1;`;

export const Title = styled.h3`margin-bottom: 20px;`;

export const List = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const ListItem = styled.li`
  list-style-type: none;
  width: 50%;
  margin-bottom: 10px;
  cursor: pointer;
`;

//Right Column
export const RightSection = styled.div`flex: 1;`;

export const ContactItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;
export const Payment = styled.img``;
