/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react';
import RegularList from '../components/RegularList';

const Parts = ({ selectedSet, partsData, onQuantityChange }) => {
  const [items, setItems] = useState(partsData || []);

  useEffect(() => {
    setItems(partsData || []);
  }, [partsData]);

  const handleQuantityChange = (partIndex, newQuantity) => {
    onQuantityChange(selectedSet.id, partIndex, newQuantity);
    setItems((prevItems) => {
      const newItems = [...prevItems];
      newItems[partIndex].initialQuantity = newQuantity;
      return newItems;
    });
  };

  return (
    <div>
      <h1>Części (Parts) - {selectedSet.name}</h1>
      <RegularList items={items} onQuantityChange={handleQuantityChange} />
    </div>
  );
};

export default Parts;
