import styled from "styled-components";
import { getProduct } from "../utils/APIs";
import { useFetchUser } from "../hooks/useFetchUsers";

const ViewProducts = () => {
  const allUsers = useFetchUser(getProduct);

  return (
    <Container>
      <Main>
        {allUsers?.map((props: any) => (
          <div key={props?.id}>
            <div>{props.title}</div>
            <div>₦{props.price}</div>
          </div>
        ))}
      </Main>
    </Container>
  );
};

export default ViewProducts;

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
