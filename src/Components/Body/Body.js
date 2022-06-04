import React from "react";
import styled from "styled-components";
import Header from "../Header/Header";

const Body = () => {
  return (
    <>
      <Body1>
        <Header />
      </Body1>
      <Container>
        <Wrapper>
          <Text>
            <Wrt>Our Work</Wrt>
          </Text>
          <Body2>
            <Img1>
              <img src="/gil.jpg" alt="loading" />
            </Img1>
            <Img2>
              <img src="/img1.jpg" alt="loading" />
            </Img2>
            <Img3>
              <img src="/sis.jpg" alt="loading" />
            </Img3>
          </Body2>
        </Wrapper>
      </Container>
    </>
  );
};

export default Body;

const Container = styled.div`
  min-height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  /* background-color: red; */
`;
const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* background-color: green; */
  flex-direction: column;
`;
const Body1 = styled.div`
  /* margin-top: 40px; */
  height: 630px;
  /* background-color: blue; */
  width: 100%;
  /* background-image: url("/boy.png"); */
  background-image: url("/add2.jpg");
  background-position: center;
  background-repeat: no-repeat;

  @media screen and (max-width: 768px) {
    /* background-image: url("/add5.jpg"); */
    background-image: url("/add6.jpg");
    object-fit: contain;
    /* width: 100%; */
    /* height: 10%; */
  }
`;

const Text = styled.div`
  height: 70px;
  width: 80%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  /* background-color: red; */
`;
const Wrt = styled.div`
  font-size: 50px;
  font-weight: 450px;
  font-family: jokerman;
`;
const Body2 = styled.div`
  width: 85%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;

  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    margin-bottom: 9px;
  }
`;
const Img1 = styled.div`
  height: 380px;
  width: 350px;
  @media screen and (max-width: 768px) {
    margin-bottom: 12px;
  }

  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
    border-radius: 5px;
  }
`;
const Img2 = styled.div`
  height: 380px;
  width: 350px;
  @media screen and (max-width: 768px) {
    margin-bottom: 12px;
  }

  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
    border-radius: 5px;
  }
`;
const Img3 = styled.div`
  height: 380px;
  width: 350px;
  @media screen and (max-width: 768px) {
    margin-bottom: 12px;
  }

  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
    border-radius: 5px;
  }
`;
