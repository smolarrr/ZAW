import { useState } from 'react';
import SetsList from '../components/SetsList';
import Parts from './Parts';

const sets = [
  {
    id: 'set1',
    image: 'https://via.placeholder.com/100',
    name: 'Zestaw 1'
  },
  {
    id: 'set2',
    image: 'https://via.placeholder.com/100',
    name: 'Zestaw 2'
  }
];

const initialPartsData = {
  set1: [
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
    }
  ],
  set2: [
    {
      image: 'https://via.placeholder.com/50',
      name: 'Nazwa klocka 3',
      number: '12347',
      initialQuantity: 3,
      price: 0.18
    }
  ]
};

const Sets = () => {
  const [selectedSet, setSelectedSet] = useState(sets[0]);
  const [partsData, setPartsData] = useState(initialPartsData);

  const handleQuantityChange = (setId, partIndex, newQuantity) => {
    setPartsData((prevPartsData) => {
      const newPartsData = { ...prevPartsData };
      newPartsData[setId][partIndex].initialQuantity = newQuantity;
      return newPartsData;
    });
  };

  return (
    <div>
      <h1>Zestawy (Sets)</h1>
      <SetsList sets={sets} onSelectSet={setSelectedSet} />
      {selectedSet && (
        <div id="parts">
          <Parts
            selectedSet={selectedSet}
            partsData={partsData[selectedSet.id]}
            onQuantityChange={handleQuantityChange}
          />
        </div>
      )}
    </div>
  );
};

export default Sets;
