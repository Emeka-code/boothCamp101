import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { BsThreeDots } from "react-icons/bs";
import { GiCancel } from "react-icons/gi";
import Sider from "./Sider";

const Header = () => {
  const [barToggle, setBarToggle] = useState(false);
  console.log(barToggle);
  const barChange = () => {
    setBarToggle(!barToggle);
  };
  return (
    <>
      <Container>
        <Wrapper>
          <Head to="/">Zioss_Fash</Head>
          <Nav>
            <Nav4 to="/Collection">Collections</Nav4>
            <Nav1 to="/About">About Zioss</Nav1>
            <Button1 to="/SignUp">Sign Up</Button1>
            <Button to="/signIn">Sign in</Button>
          </Nav>
          <SideIcon>
            {barToggle ? (
              <GiCancel fontSize="35px" color="grey" onClick={barChange} />
            ) : (
              <BsThreeDots fontSize="35px" color="grey" onClick={barChange} />
            )}
          </SideIcon>
        </Wrapper>
      </Container>
      {barToggle ? <Sider /> : null}
    </>
  );
};

export default Header;

const Container = styled.div`
  height: 70px;
  width: 100%;
  /* background-color: red; */
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Wrapper = styled.div`
  margin-top: 40px;
  width: 85%;
  /* background-color: #aaaa; */
  /* background-color: green; */
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`;
const Head = styled(Link)`
  font-size: 40px;
  color: gray;
  text-decoration: none;
  font-family: jokerman;
`;
const Nav = styled.div`
  width: 480px;
  /* background-color: yellow; */
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 768px) {
    display: none;
  }

  nav {
    font-size: 20px;
    font-weight: 500;
    color: white;
    :hover {
      color: black;
    }
  }
`;
const Button1 = styled(Link)`
  color: black;
  text-decoration: none;
  margin-top: 6px;
  height: 35px;
  width: 70px;
  border: none;
  outline: none;
  border-radius: 7px;
  font-size: 15px;
  font-weight: 800;
  /* background-color: #808080; */

  :hover {
    color: gray;
    background-color: transparent;
  }
`;
const Button = styled(Link)`
  text-decoration: none;
  color: black;
  margin-top: 6px;
  height: 35px;
  width: 70px;
  border: none;
  outline: none;
  border-radius: 7px;
  font-size: 15px;
  font-weight: 800;
  /* background-color: #808080; */

  :hover {
    color: gray;
    background-color: transparent;
  }
`;

const Nav1 = styled(Link)`
  font-size: 15px;
  font-weight: 500;
  color: black;
  text-decoration: none;
  :hover {
    color: gray;
  }
`;

const Nav4 = styled(Link)`
  font-size: 15px;
  font-weight: 500;
  color: black;
  text-decoration: none;
  :hover {
    color: gray;
  }
`;
const SideIcon = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: block;
  }
`;
