import React from "react";
import {
  Box,
  Container,
  Row,
  Column,
  FooterLink,
  Heading,
} from "./FooterStyles";

const Footer = () => {
  return (
    <Box>

      <Container>
        <Row>
          <Column>
            <Heading>MISSION</Heading>
            <FooterLink href="#">About Us</FooterLink>
            <FooterLink href="#">Who Are We</FooterLink>
          </Column>
          <Column>
            <Heading >LOCATIONS</Heading>
            <FooterLink href="#">Uttar Pradesh</FooterLink>
            <FooterLink href="#">Ahemdabad</FooterLink>
            <FooterLink href="#">Indore</FooterLink>
            <FooterLink href="#">Mumbai</FooterLink>
          </Column>
          <Column>
            <Heading>CONTACT US</Heading>
            <FooterLink href="#">24th Cross Bangalore</FooterLink>
            <FooterLink href="#">taruFoundation@gmail.com</FooterLink>
            <FooterLink href="#">+91 3492846838</FooterLink>
            <FooterLink href="#">+91 4720279284</FooterLink>
          </Column>
          <Column>
            <Heading>SOCIAL MEDIA</Heading>
            <FooterLink href="#">Facebook</FooterLink>
            <FooterLink href="#">Instagram</FooterLink>
            <FooterLink href="#">Twitter</FooterLink>
            <FooterLink href="#">Youtube</FooterLink>

          </Column>
        </Row>
      </Container>
    </Box>
  );
};
export default Footer;
