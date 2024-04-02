import { Outlet, Link } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.div`
  margin: 0 15%;
`;

const Header = styled.div`
  display: flex;
  border: 4px solid var(--color-white);
  margin: 20px 0;
  justify-content: space-around;
  height: 50px;
  border-radius: 10px;
`;

const NavItem = styled(Link)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-decoration: none;
  color: var(--color-white);
  transition: color 0.3s;

  &:hover {
    color: var(--color-red);
  }
`;

const Layout = () => {
  return (
    <Wrapper>
      <Header>
        <NavItem to="/">Home</NavItem>
        <NavItem to="/info">Info</NavItem>
        <NavItem to="/notice">Notice</NavItem>
        <NavItem to="/calendar">Calendar</NavItem>
        <NavItem to="/gallery">Gallery</NavItem>
      </Header>
      <Outlet />
    </Wrapper>
  );
};

export default Layout;
