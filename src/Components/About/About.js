import React from "react";
import Header from "../Header/Header";
import styled from "styled-components";

const About = () => {
  return (
    <>
      <Header />
      <Container>
        <Wrapper>
          <Img>
            <img src="/ceo.jpg" alt="loading" />
          </Img>
          <Text>
            <WR>About</WR>
            <WR1>
              Too many people spend money they earned..to buy things they don't
              want..to impress people that they don't like. --Will Rogers A wise
              person should have money in their head, but not in their heart.
              --Jonathan Swift Wealth consists not in having great possessions,
              but in having few wants. --Epictetus Money often costs too much.
              --Ralph Waldo Emerson PROMOTED Everyday is a bank account, and
              time is our currency. No one is rich, no one is poor, we've got 24
              hours each. --Christopher Rice It's how you deal with failure that
              determines how you achieve success. --David Feherty Frugality
              includes all the other virtues. --Cicero I love money. I love
              everything about it. I bought some pretty good stuff. Got me a
              $300 pair of socks. Got a fur sink. An electric dog polisher. A
              gasoline powered turtleneck sweater. And, of course, I bought some
              dumb stuff, too. --Steve Martin An investment in knowledge pays
              the best interest. --Benjamin Franklin I will tell you the secret
              to getting rich on Wall Street. You try to be greedy when others
              are fearful. And you try to be fearful when others are greedy.
              --Warren Buffett Annual income twenty pounds, annual expenditure
              nineteen six, result happiness. Annual income twenty pounds,
              annual expenditure twenty pound ought and six, result misery.
              --Charles Dickens Opportunity is missed by most people because it
              is dressed in overalls and looks like work. --Thomas Edison
            </WR1>
          </Text>
        </Wrapper>
        <Lco>Zioss Founder and Ceo</Lco>
      </Container>
    </>
  );
};

export default About;

const Container = styled.div`
  min-height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  /* background-color: red; */
  flex-direction: column;
  margin-top: 20px;

  @media screen and (max-width: 768px) {
    margin-bottom: 50px;
  }
`;
const Wrapper = styled.div`
  width: 85%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* background-color: blueviolet; */
  flex-direction: row;

  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`;
const Img = styled.div`
  width: 500px;
  height: 500px;
  /* background-color: green; */
  box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 5px 0px,
    rgba(0, 0, 0, 0.1) 0px 0px 1px 0px;

  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
    border-radius: 5px;

    @media screen and (max-width: 768px) {
      width: 98%;
    }
  }
`;
const Text = styled.div`
  width: 700px;
  /* height: 500px; */
  /* background-color: yellow; */
  box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 5px 0px,
    rgba(0, 0, 0, 0.1) 0px 0px 1px 0px;
  flex-direction: column;

  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    width: 98%;
    justify-content: center;
    align-items: center;
    border: none;
    margin-top: 10px;
  }
`;
const WR = styled.div`
  height: 40px;
  font-size: 25px;
  margin-bottom: 9px;
  font-family: 500;
  font-family: jokerman;
  /* background-color: red; */
`;
const WR1 = styled.div`
  /* font-family: jokerman; */
  line-height: 1.7;
  @media screen and (max-width: 768px) {
    width: 95%;
    margin: 15px;
    border: none;
  }
`;
const Lco = styled.div`
  height: 20px;
  width: 85%;
  font-size: 12px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  color: grey;
`;
