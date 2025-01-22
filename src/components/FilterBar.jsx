/* eslint-disable react/prop-types */
const FilterBar = ({ openNow, onOpenNowChange, priceOrder, onPriceChange, category, onCategoryChange }) => {
  return (
    <div className="flex items-center justify-between border-t border-b border-gray-300 px-8 py-4 w-[95%]">
      <div className="flex items-center space-x-4">
        <label htmlFor="filter-by" className="text-gray-600 mr-2">Filter By:</label>
        <div className="flex items-center">
          <input
            type="checkbox"
            id="open-now"
            checked={openNow}
            onChange={onOpenNowChange}
            className="w-4 h-4 text-blue-600 border-gray-300 rounded-full focus:ring-blue-500"
          />
          <label htmlFor="open-now" className="ml-2 text-gray-700">
            Open Now
          </label>
        </div>

        <div>
          <label htmlFor="price" className="sr-only">
            Price
          </label>
          <select
            id="price"
            value={priceOrder}
            onChange={onPriceChange}
            className="border-b border-gray-300 rounded-md px-3 py-2 bg-transparent text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Price</option>
            <option value="low-to-high">Low to High</option>
            <option value="high-to-low">High to Low</option>
          </select>
        </div>

        <div>
          <label htmlFor="categories" className="sr-only">
            Categories
          </label>
          <select
            id="categories"
            value={category}
            onChange={onCategoryChange}
            className="border-b border-gray-300 rounded-md px-3 py-2 bg-transparent text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Categories</option>
            <option value="food">Food</option>
            <option value="drinks">Drinks</option>
            <option value="shopping">Shopping</option>
          </select>
        </div>
      </div>

      <button className="px-4 py-2 text-gray-700 bg-gray-100 border border-gray-300 rounded-md hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-400">
        Clear All
      </button>
    </div>
  );
};

export default FilterBar;
