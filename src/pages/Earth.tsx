import React, { useState } from "react";
import earth from "../asset/earth.svg";
import styled from "styled-components";
const Earth = () => {
  const [img, setImg] = useState<boolean>(true);
  const [img1, setImg1] = useState<boolean>(false);
  const [img2, setImg2] = useState<boolean>(false);

  const onToggle1 = () => {
    setImg(true);
    setImg1(false);
    setImg2(false);
  };

  const onToggle2 = () => {
    setImg(false);
    setImg1(true);
    setImg2(false);
  };

  const onToggle3 = () => {
    setImg(false);
    setImg1(false);
    setImg2(true);
  };

  return (
    <Container>
      <Main>
        <Top>
          <Image src={earth} />
          <Content>
            <Title>Earth</Title>

            {img ? (
              <Body>
                Third planet from the Sun and the only known planet to harbor
                life. About 29.2% of Earth's surface is land with remaining
                70.8% is covered with water. Earth's distance from the Sun,
                physical properties and geological history have allowed life to
                evolve and thrive.
              </Body>
            ) : img1 ? (
              <Body>
                Earth's interior, like that of the other terrestrial planets, is
                divided into layers by their chemical or physical (rheological)
                properties. The outer layer is a chemically distinct silicate
                solid crust, which is underlain by a highly viscous solid
                mantle.
              </Body>
            ) : img2 ? (
              <Body>
                The total surface area of Earth is about 510 million km2. The
                continental crust consists of lower density material such as the
                igneous rocks granite and andesite. Less common is basalt, a
                denser volcanic rock that is the primary constituent of the
                ocean floors.
              </Body>
            ) : null}

            <Button onClick={onToggle1} bg={img ? "tt" : ""}>
              Overview
            </Button>
            <Button onClick={onToggle2} bg={img1 ? "tt" : ""}>
              Internal Structure
            </Button>
            <Button onClick={onToggle3} bg={img2 ? "tt" : ""}>
              Surface Geology
            </Button>
          </Content>
        </Top>
        <Bottom>
          <Card>
            <Text>Text</Text>
            <BigText>BigText</BigText>
          </Card>
          <Card>
            <Text>Text</Text>
            <BigText>BigText</BigText>
          </Card>
          <Card>
            <Text>Text</Text>
            <BigText>BigText</BigText>
          </Card>
          <Card>
            <Text>Text</Text>
            <BigText>BigText</BigText>
          </Card>
        </Bottom>
      </Main>
    </Container>
  );
};

export default Earth;

const Button = styled.div<{ bg: string }>`
  width: 300px;
  height: 40px;
  display: flex;
  align-items: center;
  padding-left: 20px;
  border: 1px solid silver;
  margin: 10px 0;
  transition: all 350ms;
  text-transform: uppercase;

  font-weight: ${({ bg }) => (bg ? "700" : "normal")};
  color: ${({ bg }) => (bg ? "white" : "black")};
  background-color: ${({ bg }) => (bg ? "darkorange" : "")};

  :hover {
    background-color: gray;
    cursor: pointer;
  }
`;

const Body = styled.div`
  width: 300px;
  color: #323232;
  font-size: 12px;
  line-height: 1.5;
  margin-bottom: 50px;
`;

const Title = styled.div`
  text-transform: uppercase;
  font-weight: 900;
  font-size: 60px;
`;

const BigText = styled.div`
  font-size: 30px;
  font-weight: 700;
`;

const Text = styled.div``;

const Card = styled.div`
  width: 190px;
  border: 1px solid silver;
  height: 100px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding-left: 20px;
  margin: 0 10px;
`;

const Bottom = styled.div`
  margin-top: 100px;
  width: 100%;
  justify-content: center;
  display: flex;
`;

const Content = styled.div`
  margin-left: 80px;
`;

const Image = styled.img`
  height: 200px;
  margin-right: 80px;
`;

const Top = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Main = styled.div`
  width: 1000px;
  min-height: 600px;
  margin-top: 50px;
  display: flex;
  flex-direction: column;
`;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgb(254, 231, 251);
  background: linear-gradient(
    120deg,
    rgba(242, 227, 246, 1) 0%,
    rgba(222, 239, 254, 1) 39%,
    rgba(222, 246, 237, 1) 95%
  );
`;
