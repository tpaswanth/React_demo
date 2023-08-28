import styled from "styled-components";
import Button from "../UI/Button";
const HeaderComponent = styled.div`
    position: fixed;
    width: 100%;
    height: 4rem;
    background-color: #151513;
    color: white;
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 0 0 ;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
    z-index: 12;
  }`;
const NavItems = styled.ul`
  list-style: none;
  display: flex;
  gap: 1rem;
  margin: 0;
  padding: 10px 5px;
`;

const NavItem = styled.li`
  font-size: 1.2rem;
  cursor: pointer;
  padding: 10px 5px;
  margin-right: 5px;

  &:hover {
    text-decoration: underline;
  }
`;
const Title = styled.h2`
  font-size: 2rem;
  color: #333;
  margin: 0;
  padding: 0 5px;
`;
const Header = () => {
  return (
    <HeaderComponent>
      <Title>Moviezz!!!!</Title>
      <NavItems>
        <NavItem>MyList</NavItem>
        <NavItem>Library</NavItem>
        <NavItem>Profile</NavItem>
        <Button bgcolor=" #919494" bgcolorhover="#931068">
          Login
        </Button>
        <Button bgcolor=" #931068" bgcolorhover="#919494">
          SignUp
        </Button>
      </NavItems>
    </HeaderComponent>
  );
};
export default Header;
