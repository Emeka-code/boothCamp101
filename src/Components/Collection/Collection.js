import React from "react";
import Header from "../Header/Header";
import styled from "styled-components";

const Collection = () => {
  return (
    <>
      <Header />
      <Container>
        <Wrapper>
          <Collect>
            <Text>My Collections</Text>
            <Images>
              <Img>
                <img src="/fas1.png" alt="loading" />
              </Img>
              <Img>
                <img src="/fas2.jpg" alt="loading" />
              </Img>
              <Img>
                <img src="/fas3.jpg" alt="loading" />
              </Img>
              <Img>
                <img src="/fas4.jpg" alt="loading" />
              </Img>
              <Img>
                <img src="/fas5.jpg" alt="loading" />
              </Img>
              <Img>
                <img src="/fas6.jpg" alt="loading" />
              </Img>
              <Img>
                <img src="/fas7.jpg" alt="loading" />
              </Img>
              <Img>
                <img src="/fas8.jpg" alt="loading" />
              </Img>
              <Img>
                <img src="/fas9.jpg" alt="loading" />
              </Img>
              <Img>
                <img src="/fas10.jpg" alt="loading" />
              </Img>
              <Img>
                <img src="/fas11.jpg" alt="loading" />
              </Img>
              <Img>
                <img src="/fas12.jpg" alt="loading" />
              </Img>
              <Img>
                <img src="/fas13.jpg" alt="loading" />
              </Img>
              <Img>
                <img src="/fas14.jpg" alt="loading" />
              </Img>
              <Img>
                <img src="/fas15.jpg" alt="loading" />
              </Img>
              <Img>
                <img src="/fas16.jpg" alt="loading" />
              </Img>
              <Img>
                <img src="/fas17.jpg" alt="loading" />
              </Img>
              <Img>
                <img src="/fas18.jpg" alt="loading" />
              </Img>
              <Img>
                <img src="/fas19.jpg" alt="loading" />
              </Img>
              <Img>
                <img src="/fas20.jpg" alt="loading" />
              </Img>
              <Img>
                <img src="/fas21.jpg" alt="loading" />
              </Img>
              <Img>
                <img src="/fas22.jpg" alt="loading" />
              </Img>
              <Img>
                <img src="/fas23.jpg" alt="loading" />
              </Img>
              <Img>
                <img src="/fas24.jpg" alt="loading" />
              </Img>
            </Images>
          </Collect>
        </Wrapper>
      </Container>
    </>
  );
};

export default Collection;

const Container = styled.div`
  margin-top: 20px;
  min-height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  /* background-color: grey; */
`;
const Wrapper = styled.div`
  width: 85%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Collect = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const Text = styled.div`
  margin-left: 40px;
  width: 100%;
  font-size: 30px;
  font-weight: 700;
  font-family: jokerman;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Images = styled.div`
  /* height: 520px; */
  width: 100%;
  /* background-color: white; */
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
`;
const Img = styled.div`
  width: 370px;
  height: 400px;
  /* background-color: blue; */
  margin: 10px;

  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
    border-radius: 5px;
  }
`;
// const Container = styled.div``;
