import { useState, useEffect } from 'react';
import RegularList from '../components/RegularList';
import { useParams } from 'react-router-dom';

const initialPartsData = {
    1: [
    {
        image: 'https://via.placeholder.com/50',
        name: 'Nazwa klocka 1',
        number: '12345',
        initialQuantity: 1,
        price: 0.12
    },
    {
        image: 'https://via.placeholder.com/50',
        name: 'Nazwa klocka 2',
        number: '12346',
        initialQuantity: 2,
        price: 0.15
    },
    {
        image: 'https://via.placeholder.com/50',
        name: 'Nazwa klocka 3',
        number: '12347',
        initialQuantity: 3,
        price: 0.18
    }
    ],
    2: [
    {
        image: 'https://via.placeholder.com/50',
        name: 'Nazwa klocka 3',
        number: '12347',
        initialQuantity: 3,
        price: 0.18
    },
    {
        image: 'https://via.placeholder.com/50',
        name: 'Nazwa klocka 4',
        number: '12348',
        initialQuantity: 4,
        price: 0.21
    },
    ],
    3: [
        {
        image: 'https://via.placeholder.com/50',
        name: 'Nazwa klocka 5',
        number: '12349',
        initialQuantity: 5,
        price: 0.24
        },
        {
        image: 'https://via.placeholder.com/50',
        name: 'Nazwa klocka 6',
        number: '12350',
        initialQuantity: 6,
        price: 0.27
        },
        {
        image: 'https://via.placeholder.com/50',
        name: 'Nazwa klocka 7',
        number: '12351',
        initialQuantity: 7,
        price: 0.30
        },
    ]
};

const Parts = () => {
  const { setId } = useParams();
  const [items, setItems] = useState(initialPartsData[setId] || []);

  useEffect(() => {
    setItems(initialPartsData[setId] || []);
  }, [setId]);

  const handleQuantityChange = (partIndex, newQuantity) => {
    setItems((prevItems) => {
      const newItems = [...prevItems];
      newItems[partIndex].initialQuantity = newQuantity;
      return newItems;
    });
  };

  return (
    <div>
      <h1>Części (Parts) - {setId}</h1>
      <RegularList items={items} onQuantityChange={handleQuantityChange} />
    </div>
  );
};

export default Parts;
