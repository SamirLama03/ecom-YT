import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  flex: 1;
  margin: 3px;
  height: 70vh;
  position: relative;
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
const Info = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  flex-direction: column;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Tittle = styled.h1`
  color: white;
  font-size: 28px;
  font-weight: 400;
  margin-bottom: 20px;
`;
const Button = styled.button`
  border: none;
  padding: 10px;
  cursor: pointer;
  color: gray;
  font-weight: 600;
  background-color: white;
`;

const CategoryItem = ({ item }) => {
  return (
    <Container>
      <Image src={item.Img} />
      <Info>
        <Tittle>{item.tittle}</Tittle>
        <Button>
          <Link to="/productlist">SHOP NOW</Link>
        </Button>
      </Info>
    </Container>
  );
};

export default CategoryItem;
