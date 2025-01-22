import FilterBar from "../components/FilterBar"
import Header from "../components/Header"
import RestaurantList from "../components/RestautantLists"

function Main() {
  return (
    <div className='flex flex-col items-center justify-start pb-24'>
      <Header />
      <FilterBar />
      <RestaurantList />
    </div>
  )
}

export default Main
