/* eslint-disable react/prop-types */
import styled from 'styled-components';

const SetsList = ({ sets, onSelectSet }) => {
  return (
    <List>
      {sets.map((set) => (
        <ListItem key={set.id} onClick={() => onSelectSet(set)}>
          <img src={set.image} alt={set.name} />
          <p>{set.name}</p>
        </ListItem>
      ))}
    </List>
  );
};

export default SetsList;

const List = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
`;

const ListItem = styled.div`
  border: 1px solid #ddd;
  padding: 1rem;
  cursor: pointer;
  text-align: center;
  img {
    max-width: 100px;
    margin-bottom: 1rem;
  }
  p {
    margin: 0;
  }
  &:hover {
    background-color: #f4f4f4;
  }
`;
