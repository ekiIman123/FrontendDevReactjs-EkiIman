/* eslint-disable react/prop-types */
import { useState } from "react";
import FilterBar from "../components/FilterBar";
import Header from "../components/Header";
import RestaurantList from "../components/RestautantLists";

function Main({ restaurants, loading, error }) {
  const [openNow, setOpenNow] = useState(false);
  const [priceOrder, setPriceOrder] = useState("");
  const [category, setCategory] = useState("");

  const handleOpenNowChange = (event) => {
    setOpenNow(event.target.checked);
  };

  const handlePriceChange = (event) => {
    setPriceOrder(event.target.value);
  };

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  // Filter restaurants based on selected filters
  const filteredRestaurants = restaurants
    .filter((restaurant) => {
      if (openNow && !restaurant.isOpen) return false; // Assuming 'isOpen' property
      if (category && restaurant.category !== category) return false;
      return true;
    })
    .sort((a, b) => {
      if (priceOrder === "low-to-high") {
        return a.price - b.price;
      }
      if (priceOrder === "high-to-low") {
        return b.price - a.price;
      }
      return 0;
    });

  return (
    <div className="flex flex-col items-center justify-start pb-24">
      <Header />
      <FilterBar
        openNow={openNow}
        onOpenNowChange={handleOpenNowChange}
        priceOrder={priceOrder}
        onPriceChange={handlePriceChange}
        category={category}
        onCategoryChange={handleCategoryChange}
      />
      <RestaurantList
        restaurants={filteredRestaurants}
        loading={loading}
        error={error}
      />
    </div>
  );
}

export default Main;
