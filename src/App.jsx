import { Route, Routes } from 'react-router-dom';
import Main from './pages/Main';
import DetailView from './pages/DetailView';
import { useEffect, useState } from 'react';

function App() {
  const [restaurants, setRestaurants] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRestaurants = async () => {
      try {
        const response = await fetch(
          'https://6790ef10af8442fd737861ef.mockapi.io/sekawan-media-api/restaurants'
        );

        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }

        const data = await response.json();
        setRestaurants(data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchRestaurants();
  }, []);

  return (
    <div>
      <Routes>
        <Route path="/" element={<Main restaurants={restaurants} loading={loading} error={error} />} />
        <Route path="/detail" element={<DetailView />} />
      </Routes>
    </div>
  )
}

export default App
