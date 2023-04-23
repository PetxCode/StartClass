import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logOutUser } from "../../Global/GlobalState";

const Header = () => {
  const dispatch = useDispatch();
  const user = useSelector((state: any) => state.user);
  const navigate = useNavigate();
  return (
    <div>
      <Container>
        <Main>
          <Logo to="/">CodeLab</Logo>

          <LinkHolder>
            <Holder to="/user">All Users</Holder>
            <Holder to="/earth">Earth</Holder>

            {user ? (
              <div>
                <Holder to="/view-product">View Products</Holder>
                <Holder to="/create-product">Create Product</Holder>
              </div>
            ) : null}

            {user ? (
              <HolderLogger
                onClick={() => {
                  dispatch(logOutUser());
                  navigate("/");
                }}
              >
                LogOut
              </HolderLogger>
            ) : (
              <Holder to="/sign">Signed</Holder>
            )}
          </LinkHolder>
        </Main>
      </Container>
    </div>
  );
};

export default Header;

const HolderLogger = styled.div`
  padding: 0 10px;
  font-weight: 700;
  text-decoration: none;
  color: black;
  text-transform: uppercase;
  cursor: pointer;
`;

const Holder = styled(Link)`
  padding: 0 10px;
  font-weight: 700;
  text-decoration: none;
  color: black;
  text-transform: uppercase;
  cursor: pointer;
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
