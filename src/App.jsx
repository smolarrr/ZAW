import styled from 'styled-components';
import { BrowserRouter as Router, Route, Routes, Link, Navigate } from 'react-router-dom';
import Sets from './Pages/Sets';
import Parts from './Pages/Parts';
import Help from './Pages/Help';

const App = () => {
  return (
    <Router>
      <Nav>
        <NavItem to="/sets">Zestawy (Sets)</NavItem>
        <NavItem to="/parts">Części (Parts)</NavItem>
        <NavItem to="/help">Pomoc (FAQ)</NavItem>
      </Nav>
      <Main>
        <Routes>
          <Route path="/sets" element={<Sets />} />
          <Route path="/sets/:setId" element={<Parts />} />
          <Route path="/parts" element={<Navigate to="/sets/1" />} />
          <Route path="/help" element={<Help />} />
        </Routes>
      </Main>
    </Router>
  );
};

export default App;

const Nav = styled.nav`
  display: flex;
  justify-content: space-around;
  background-color: #333;
  padding: 1rem;
`;

const NavItem = styled(Link)`
  color: #fff;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

const Main = styled.main`
  padding: 2rem;
`;
