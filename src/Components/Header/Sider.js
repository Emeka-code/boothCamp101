import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Sider = () => {
  return (
    <Container>
      <Span to="/">Home</Span>
      <Span to="/Collection">Collection</Span>
      <Span to="/About">About</Span>
      <Button to="/SignIn">SignIn</Button>
      <Button to="/SignUp">SignUp</Button>
    </Container>
  );
};

export default Sider;

const Container = styled.div`
  width: 30%;
  height: 30vh;
  margin-left: 425px;
  margin-top: -14px;
  display: none;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  @media screen and (max-width: 768px) {
    display: flex;
    margin-left: 220px;
    color: black;
  }
`;
const Span = styled(Link)`
  text-decoration: none;
  font-weight: 600;
  transition: all 350ms;
  color: black;

  :hover {
    color: #747474;
    cursor: pointer;
    transform: scale(1.1);
  }
`;
const Button = styled(Link)`
  text-decoration: none;
  font-family: "Sen", sans-serif;
  font-weight: bold;
  font-size: 13px;
  padding: 8px 18px;
  background-color: #fff;
  border-radius: 8px;
  color: black;
  outline: none;
  border: none;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  cursor: pointer;
`;
