import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <Container>
        <Main>
          <Logo to="/">CodeLab</Logo>

          <LinkHolder>
            <Holder to="/sign">Signed</Holder>
            <Holder to="/user">All Users</Holder>
            <Holder to="/earth">Earth</Holder>
          </LinkHolder>
        </Main>
      </Container>
    </div>
  );
};

export default Header;

const Holder = styled(Link)`
  padding: 0 10px;
  font-weight: 700;
  text-decoration: none;
  color: black;
  text-transform: uppercase;
`;

const LinkHolder = styled.div`
  display: flex;
  justify-content: center;
`;

const Logo = styled(Link)`
  color: black;
  text-decoration: none;
  font-weight: 900;
  font-size: 40px;
`;

const Main = styled.div`
  width: 90%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Container = styled.div`
  width: 100%;
  height: 80px;
  border-bottom: 1px solid silver;
  display: flex;
  justify-content: center;
  position: fixed;
`;
