import styled from "styled-components";
import React, { useState } from "react";
import { createProduct, signin } from "../utils/APIs";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../Global/GlobalState";
import { usePost } from "../hooks/usePost";

const CreateProduct = () => {
  const [title, setTitle] = useState<string>("");
  const [price, setPrice] = useState<number>(0);
  const dispatch = useDispatch();
  const token = useSelector((state: any) => state.user);

  return (
    <Container>
      <Main>
        <Card>
          <Input
            placeholder="title"
            value={title}
            onChange={(e: any) => {
              setTitle(e.target.value);
            }}
          />
          <Input
            placeholder="price"
            value={price}
            onChange={(e: any) => {
              setPrice(e.target.value);
            }}
          />

          <Button
            bg="start"
            onClick={async () => {
              createProduct(token?.token, { title, price }).then((res) => {
                console.log(res?.data.data);
                setPrice(0);
                setTitle("");
              });
            }}
          >
            Create Product
          </Button>
        </Card>
      </Main>
    </Container>
  );
};

export default CreateProduct;

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
