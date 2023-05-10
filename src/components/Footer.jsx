import {
  Facebook,
  Instagram,
  MailOutline,
  Phone,
  Pinterest,
  Room,
  Twitter,
} from "@mui/icons-material";
import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const Logo = styled.h1`
  font-weight: 600;
  font-size: 32px;
`;
const Desc = styled.p`
  margin: 20px 0;
`;
const SocialContainer = styled.div`
  display: flex;
`;
const SocialIcon = styled.div`
  height: 40px;
  width: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 12px;
  cursor: pointer;
`;

const Center = styled.div`
  flex: 1;
  padding: 20px;
`;

const Title = styled.h3`
  margin-bottom: 30px;
  font-size: larger;
  font-weight: bold;
`;

const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
`;

const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
`;

const Right = styled.div`
  flex: 1;
  padding: 20px;
`;

const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;

const Payment = styled.img`
  height: 70px;
`;

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>SAMIR.</Logo>
        <Desc>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, nulla
          velit. Quia saepe unde ratione, excepturi doloribus delectus qui
          voluptatibus illo aliquam eos. Repellendus, voluptate?
        </Desc>
        <SocialContainer>
          <SocialIcon color="3b5998">
            <Facebook />
          </SocialIcon>
          <SocialIcon color="E4405F">
            <Instagram />
          </SocialIcon>
          <SocialIcon color="00acee">
            <Twitter />
          </SocialIcon>
          <SocialIcon color="c8232c">
            <Pinterest />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Useful Links</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Man Fashion</ListItem>
          <ListItem>Woman Fashion</ListItem>
          <ListItem>Accessories</ListItem>
          <ListItem>My Account</ListItem>
          <ListItem>Order Tracking</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Partners</ListItem>
          <ListItem>Terms</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem>
          <Room style={{ marginRight: "10px" }} />
          Balaju,Kathmandu-16
        </ContactItem>
        <ContactItem>
          <Phone style={{ marginRight: "10px" }} />
          +977 9843 9843 98
        </ContactItem>
        <ContactItem>
          <MailOutline style={{ marginRight: "10px" }} /> contactme@samir.dev
        </ContactItem>

        <Payment img src="https://n1gloves.com/img/cms/pagos_1.png" />
      </Right>
    </Container>
  );
};

export default Footer;
