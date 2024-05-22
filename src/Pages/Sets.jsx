import SetsList from '../components/SetsList';
import { useNavigate } from 'react-router-dom';

const sets = [
  {
    id: '1',
    image: 'https://via.placeholder.com/100',
    name: 'Zestaw 1'
  },
  {
    id: '2',
    image: 'https://via.placeholder.com/100',
    name: 'Zestaw 2'
  },
  {
    id: '3',
    image: 'https://via.placeholder.com/100',
    name: 'Zestaw 3'
  }
];

const Sets = () => {
  const navigate = useNavigate();

  const handleSetClick = (set) => {
    navigate(`/sets/${set.id}`);
  };

  return (
    <div>
      <h1>Zestawy (Sets)</h1>
      <SetsList sets={sets} onSelectSet={handleSetClick} />
    </div>
  );
};

export default Sets;
