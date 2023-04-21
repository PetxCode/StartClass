// import React, { useState } from "react";
// import styled from "styled-components";
// import { AiFillPlayCircle } from "react-icons/ai";
// import { MdFavoriteBorder, MdFavorite } from "react-icons/md";
// import vid from "./Demo.mp4";

// const App = () => {
//   const [show, setShow] = useState(false);
//   const [toggle, setToggle] = useState(false);
//   const [chng, setChng] = useState(false);

//   const onChng = () => {
//     setChng(!chng);
//   };

//   const onShow = () => {
//     setShow(!show);
//   };

//   const onToggle = () => {
//     setToggle(!toggle);
//   };

//   return (
//     <Container>
//       <Main>
//         <Text>CodeLab</Text>
//         <Holder>
//           <VideoClip onClick={onToggle}>
//             <div>
//               <AiFillPlayCircle />
//               {/* start */}
//             </div>
//           </VideoClip>
//           <Content>
//             <Div>First Video</Div>
//             <DivSub>Video Desciption</DivSub>
//           </Content>
//           <Button onClick={onShow}>
//             {show ? (
//               <MdFavorite size={25} color="red" />
//             ) : (
//               <MdFavoriteBorder size={25} />
//             )}
//           </Button>
//         </Holder>
//         <Holded>
//           {toggle ? <Video bg="err" onClick={onToggle} /> : null}
//           {toggle ? <Vid src={vid} controls playsInline autoPlay /> : null}
//         </Holded>
//       </Main>
//     </Container>
//   );
// };

// export default App;

// const Holded = styled.div`
//   width: 100%;
//   height: 100%;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   transition: all 500ms;
// `;

// const Vid = styled.video`
//   /* z-index: 2; */
//   width: 500px;
//   height: 300px;
//   background-color: black;
//   border-radius: 5px;
//   overflow: hidden;
//   object-fit: cover;
//   position: relative;
//   top: -150px;
//   transition: all 500ms;
// `;

// const Video = styled.div<{
//   bg: string;
// }>`
//   width: 100%;
//   height: 100%;
//   background-color: ${({ bg }) =>
//     bg ? "rgba(225, 225, 225, 0.25) " : " rgba(251, 103, 103, 0.25)"};
//   position: absolute;
//   top: 0;
//   box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
//   backdrop-filter: blur(4px);
//   -webkit-backdrop-filter: blur(4px);
//   left: 0;
//   display: flex;
//   justify-content: center;
//   align-items: center;
// `;

// const VideoClip = styled.div`
//   width: 200px;
//   height: 120px;
//   background-color: #000269;
//   border-radius: 10px;
//   color: white;
//   display: flex;
//   justify-content: center;
//   align-items: center;

//   div {
//     color: rgba(225, 225, 225, 0.4);
//     font-size: 40px;
//     transition: all 300ms;
//   }

//   :hover {
//     cursor: pointer;
//     div {
//       color: rgba(225, 225, 225, 0.8);
//     }
//   }
// `;

// const DivSub = styled.div`
//   color: silver;
// `;

// const Div = styled.div`
//   font-weight: 700;
//   margin-bottom: 5px;
// `;

// const Button = styled.div`
//   cursor: pointer;
//   transition: all 350ms;
//   /* padding: 10px; */
//   width: 35px;
//   height: 35px;
//   border-radius: 50%;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   :hover {
//     background-color: rgba(0, 0, 0, 0.1);
//   }
// `;

// const Content = styled.div`
//   flex: 1;
//   margin-left: 10px;
// `;

// const Holder = styled.div`
//   margin-top: 10px;
//   display: flex;
//   height: 120px;
//   align-items: center;
// `;

// const Text = styled.div`
//   font-size: 20px;
//   font-weight: 700;
// `;

// const Main = styled.div`
//   width: 800px;
//   height: 400px;
//   background-color: white;
//   border: 1px solid gray;
//   border-radius: 20px;
//   padding: 20px;
//   position: relative;
//   overflow: hidden;
// `;

// const Container = styled.div`
//   width: 100%;
//   height: 100vh;
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
//   /* background-color: lightblue; */

//   background: rgb(254, 231, 251);
//   background: linear-gradient(
//     45deg,
//     rgba(254, 231, 251, 1) 0%,
//     rgba(203, 232, 246, 1) 56%,
//     rgba(220, 242, 252, 1) 100%
//   );
// `;
import React from "react";

const HoderFile = () => {
  return <div>HoderFile</div>;
};

export default HoderFile;
