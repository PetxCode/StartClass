import styled from "styled-components";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { registerUser } from "../utils/APIs";
import { createUser } from "../Global/GlobalState";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  return (
    <Container>
      <Main>
        <Card>
          <Input
            placeholder="email"
            value={email}
            onChange={(e: any) => {
              setEmail(e.target.value);
            }}
          />
          <Input
            placeholder="password"
            value={password}
            onChange={(e: any) => {
              setPassword(e.target.value);
            }}
          />

          <Button
            bg="start"
            onClick={() => {
              console.log("reading Registered data: ");

              registerUser({ email, password }).then((res) => {
                console.log("reading Registered data: ", res?.data.data);

                dispatch(createUser(res?.data.data));
                navigate("/verified");
              });
            }}
          >
            Register
          </Button>
        </Card>
        <div>
          Already have an Account <Span to="/sign">Sign in</Span>
        </div>
      </Main>
    </Container>
  );
};

export default Register;
const Span = styled(Link)`
  text-decoration: none;
  color: #000269;
  cursor: pointer;
`;

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

const Input = styled.input`
  width: 300px;
  height: 40px;
  padding-left: 20px;
  border: 1px solid silver;
  margin: 10px 0;
  background-color: transparent;
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
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
