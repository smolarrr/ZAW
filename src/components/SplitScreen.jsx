import styled from 'styled-components';
const Container = styled.div`
	display: flex;
`;
const Pane = styled.div`
	flex: 1;
`;
// const PaneTwo = styled.div`
// 	flex: 2;
// `;

export const SplitScreen = (
    // eslint-disable-next-line react/prop-types
    { left: Left, right: Right }
  ) => {
    return (
      <Container>
        <Pane>
          <Left/>
        </Pane>
        <Pane> 
          <Right/>
        </Pane>
      </Container>
    );
  }