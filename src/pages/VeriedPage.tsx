import styled from "styled-components";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { verifiedUser } from "../utils/APIs";
import { useSelector, useDispatch } from "react-redux";
import { deleteUser } from "../Global/GlobalState";

const VerifiedPage = () => {
  const dispatch = useDispatch();
  const data = useSelector((state: any) => state.createUserData);

  useEffect(() => {
    if (data) {
      verifiedUser(data.id).then((res) => {
        console.log(res);
        dispatch(deleteUser(null));
      });
    }
  }, []);

  return (
    <Container>
      <Main>
        <Card>
          <div>You account has now been Verified</div>
          <br />
          <div>You can now sign in</div>
          <br />
          <br />
          <Button bg="start" to="/sign">
            Go to Sign in
          </Button>
        </Card>
      </Main>
    </Container>
  );
};

export default VerifiedPage;

const Button = styled(Link)<{ bg: string }>`
  text-decoration: none;
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

const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Main = styled.div``;

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
