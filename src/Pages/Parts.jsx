import RegularList from '../components/RegularList';

const sampleItems = [
  {
    image: 'https://via.placeholder.com/50',
    name: 'Lego classic',
    number: '12345',
    initialQuantity: 1,
    price: 0.12
  },
    {
        image: 'https://via.placeholder.com/50',
        name: 'lego technic',
        number: '54321',
        initialQuantity: 1,
        price: 0.05
    },
    {
        image: 'https://via.placeholder.com/50',
        name: 'Lego star wars',
        number: '67890',
        initialQuantity: 1,
        price: 0.03
    }
];

const Parts = () => {
  return (
    <div>
      <h1>Części (Parts)</h1>
      <RegularList items={sampleItems} />
    </div>
  );
};

export default Parts;
