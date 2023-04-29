import { useState } from "react";
import styled from "styled-components";
import { AiFillPlayCircle } from "react-icons/ai";
import { MdFavoriteBorder, MdFavorite } from "react-icons/md";
import { AiOutlineClose } from "react-icons/ai";
import vid from "./asset/Demo.mp4"
import vid1 from "./asset/dd.mp4"
import vid2 from "./asset/ee.mp4"
import { useSelector } from "react-redux";

const Start = () => {
  const user = useSelector((state: any) => state.user);

  console.log(user);
  const [toggle, setToggle] = useState<boolean>(false);
  const [showVideo, setShowVideo] = useState<boolean>(false);

  const [myVideo, setMyVideo] = useState([
    { title: "title1", detail: "details1", video: vid, bg: "red" },
    { title: "title2", detail: "details2", video: vid1, bg: "green" },
    { title: "title3", detail: "details3", video: vid2, bg: "#000269" },
  ]);

  const onToggled = () => {
    setToggle(!toggle);
  };

  const onShowVideo = () => {
    setShowVideo(!showVideo);
  };

  return (
    <Container>
      <Main>
        <Text>CodeLab</Text>

        {myVideo.map((props) => (
          <Holder key={props.title} >
            <VideoClip bg={props.bg}>
              <div onClick={onShowVideo}>
                <AiFillPlayCircle size={38} />
              </div>
            </VideoClip>
            <Content>
              <Div>{props.title}</Div>
              <DivSub>{props.detail}</DivSub>
            </Content>
            <Button
              onClick={() => {
                onToggled();
              }}
            >
              {toggle ? (
                <MdFavorite size={30} color="red" />
              ) : (
                <MdFavoriteBorder size={30} />
              )}
            </Button>
          </Holder>
        ))}

        {showVideo ? (
          <div>
            {
              myVideo?.map((props: any, i:number) => (
                <Div2 key={i} >
            <BackDrop onClick={onShowVideo}>
              <Icon size={30} onClick={onShowVideo} />
            </BackDrop>
            <Video src={props.video} controls autoPlay playsInline />
          </Div2>
              ))
            }
          </div>
        ) : null}
      </Main>
    </Container>
  );
};

export default Start;

const Div2 = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Icon = styled(AiOutlineClose)`
  position: absolute;
  right: 30px;
  top: 30px;
  transition: all 350ms;
  color: red;
  :hover {
    cursor: pointer;
    transform: scale(1.09);
  }
`;
const Video = styled.video`
  width: 450px;
  height: 300px;
  border-radius: 10px;
  overflow: hidden;
  background-color: black;
  object-fit: cover;
  z-index: 10;
  position: absolute;
  top: 80px;
`;
const BackDrop = styled.div`
  /* background-color: rgba(0, 0, 0, 0.3); */
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background: rgba(255, 255, 255, 0.25);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);

  display: flex;
  justify-content: center;
  align-items: center;
`;

const VideoClip = styled.div<{ bg: string }>`
  width: 200px;
  height: 120px;
  background-color: ${({ bg }) => bg};
  border-radius: 10px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;

  div {
    color: rgba(255, 255, 255, 0.3);
    transition: all 350ms;
  }

  :hover {
    div {
      cursor: pointer;
      color: rgba(255, 255, 255, 0.7);
    }
  }
`;

const DivSub = styled.div`
  color: silver;
`;

const Div = styled.div`
  font-weight: 700;
  margin-bottom: 5px;
`;
const Button = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 350ms;

  :hover {
    background-color: rgba(225, 225, 225, 0.6);
    cursor: pointer;
  }
`;

const Content = styled.div`
  flex: 1;
  margin-left: 10px;
`;

const Holder = styled.div`
  margin-top: 10px;
  display: flex;
  height: 120px;
  align-items: center;
`;

const Text = styled.div`
  font-size: 20px;
  font-weight: 700;
`;

const Main = styled.div`
  width: 800px;
  min-height: 400px;
  background-color: white;
  border: 1px solid gray;
  border-radius: 20px;
  padding: 20px;
  overflow: hidden;
  position: relative;
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
