import React from "react";
import styled from "styled-components";
import { ImWhatsapp } from "react-icons/im";
import { BsInstagram } from "react-icons/bs";

const Footer = () => {
  return (
    <Container>
      <Foot>
        <F1>
          <ImWhatsapp size={"30px"} />
        </F1>
        <F2>
          <BsInstagram size={"30px"} />
        </F2>
      </Foot>
    </Container>
  );
};

export default Footer;

const Container = styled.div`
  min-height: 80px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  /* background-color: red; */
`;
const Foot = styled.div`
  width: 200px;
  height: 20px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: row;
  /* background-color: green; */
`;
const F1 = styled.div``;
const F2 = styled.div``;
