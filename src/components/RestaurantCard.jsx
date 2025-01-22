import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const RestaurantCard = ({ restaurant }) => {
  return (
    <div className="flex flex-col gap-4 items-center justify-between bg-white rounded-lg shadow-md p-4">
      <div className="content-card w-full">
        <div className="h-52 w-full rounded-lg overflow-hidden">
          {restaurant.photos ? (
            <img
              src={restaurant.photos}
              alt={`${restaurant.name} photo`}
              className="object-cover w-full h-full"
            />
          ) : (
            <div className="bg-gray-300 h-full flex items-center justify-center text-gray-600">
              No Image
            </div>
          )}
        </div>

        <div className="mt-4">
          <h2 className="text-xl font-bold mb-2">{restaurant.name}</h2>
          <div className="flex items-center mb-2">
            <span className="text-yellow-500">{'★'.repeat(restaurant.rating)}</span>
            <span className="text-gray-500 ml-2">({restaurant.rating})</span>
          </div>
          <div className="status flex items-center justify-between">
            <p className="text-gray-600">
              {restaurant.cuisine || 'Unknown Cuisine'} | ${restaurant.price}
            </p>
            <p
              className={`text-sm ${restaurant.isOpen ? 'text-green-500' : 'text-red-500'
                }`}
            >
              {restaurant.isOpen ? 'Open Now' : 'Closed'}
            </p>
          </div>
        </div>
      </div>

      <div className="cta-card w-full">
        <Link
          to={`/detailview:${restaurant.id}`}
          className="w-full block bg-blue-950 hover:bg-blue-900 rounded text-center text-white font-bold py-2 px-4 focus:outline-none focus:shadow-outline mt-4"
        >
          Learn More
        </Link>
      </div>

    </div>
  );
};

export default RestaurantCard;
