import styled from 'styled-components';
import Sets from './Pages/Sets';
import Parts from './Pages/Parts';
import Help from './Pages/Help';

const App = () => {
  return (
    <div>
      <Nav>
        <NavItem href="#sets">Zestawy (Sets)</NavItem>
        <NavItem href="#parts">Części (Parts)</NavItem>
        <NavItem href="#help">Pomoc (FAQ)</NavItem>
      </Nav>
      <Section id="sets">
        <Sets />
      </Section>
      <Section id="parts">
        <Parts />
      </Section>
      <Section id="help">
        <Help />
      </Section>
    </div>
  );
};

export default App;

const Nav = styled.nav`
  display: flex;
  justify-content: space-around;
  background-color: #333;
  padding: 1rem;
`;

const NavItem = styled.a`
  color: #fff;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

const Section = styled.section`
  padding: 4rem 0;
  &:nth-of-type(odd) {
    background-color: #f9f9f9;
  }
  &:nth-of-type(even) {
    background-color: #fff;
  }
`;
