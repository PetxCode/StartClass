import styled from "styled-components";
import React, { useEffect, useState } from "react";
import { getUser } from "../utils/APIs";
import { useFetchUser } from "../hooks/useFetchUsers";

const GetUsers = () => {
  const allUsers = useFetchUser();
  return (
    <Container>
      <Main>
        {allUsers.map((props: any) => (
          <div key={props?.id}>
            <div>{props.email}</div>
          </div>
        ))}
      </Main>
    </Container>
  );
};

export default GetUsers;

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

const Input = styled.div``;

const Card = styled.div``;

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
