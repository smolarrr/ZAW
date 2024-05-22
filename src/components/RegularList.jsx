/* eslint-disable react/prop-types */
import styled from 'styled-components';
import ListItem from './ListItem';

const RegularList = ({ items }) => {
  return (
    <Table>
      <thead>
        <tr>
          <TableHeader>Obraz</TableHeader>
          <TableHeader>Nazwa / Numer</TableHeader>
          <TableHeader>Ilość</TableHeader>
          <TableHeader>Cena</TableHeader>
          <TableHeader>Wartość</TableHeader>
        </tr>
      </thead>
      <tbody>
        {items.map((item, index) => (
          <ListItem key={index} {...item} />
        ))}
      </tbody>
    </Table>
  );
};

export default RegularList;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin: 2rem 0;
`;

const TableHeader = styled.th`
  padding: 1rem;
  border: 1px solid #ddd;
  background-color: #f4f4f4;
`;
