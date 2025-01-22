import { useEffect, useState } from 'react';
import RestaurantCard from './RestaurantCard';

const RestaurantList = () => {
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

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div className="w-full flex flex-col items-start justify-center gap-10 py-4 px-16">
      <div className="w-full content-list">
        <h1 className="text-3xl font-bold mb-4">All Restaurants</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {restaurants.map((restaurant) => (
            <RestaurantCard key={restaurant.id} restaurant={restaurant} />
          ))}
        </div>
      </div>
      <div className="cta-list w-full flex items-center justify-center">
        <button className='bg-transparent hover:bg-blue-950 border border-blue-950 rounded text-blue-950 hover:text-white font-bold py-2 px-40 focus:outline-none focus:shadow-outline'>
          LOAD MORE
        </button>
      </div>
    </div>
  );
};

export default RestaurantList;
