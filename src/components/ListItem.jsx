/* eslint-disable react/prop-types */
import { useState } from 'react';
import styled from 'styled-components';

const ListItem = ({ image, name, number, initialQuantity, price }) => {
  const [quantity, setQuantity] = useState(initialQuantity);

  const handleIncrease = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrease = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };

  const totalValue = quantity * price;

  return (
    <TableRow>
      <TableData><img src={image} alt={name} /></TableData>
      <TableData>{name}<br />{number}</TableData>
      <TableData>
        <QuantityControl>
          <button onClick={handleDecrease}>-</button>
          <span>{quantity}</span>
          <button onClick={handleIncrease}>+</button>
        </QuantityControl>
      </TableData>
      <TableData>{price.toFixed(2)} PLN</TableData>
      <TableData>{totalValue.toFixed(2)} PLN</TableData>
    </TableRow>
  );
};

export default ListItem;

const TableRow = styled.tr`
  text-align: center;
`;

const TableData = styled.td`
  padding: 0.5rem;
  border: 1px solid #ddd;
`;

const QuantityControl = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  button {
    padding: 0.2rem 0.5rem;
    margin: 0 0.3rem;
  }
`;
