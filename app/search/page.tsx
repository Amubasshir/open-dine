import Header from './components/Header';
import RestaurantCard from './components/RestaurantCard';
import SearchSideBar from './components/SearchSideBar';

export default function search() {
  return (
    <>
      <div className="bg-gradient-t0-r from-[#of1f47] to-[#5f6984]">
        <header className="h-24 bg-gradient-to-r from-[#142b3f] to-[#192854] p-2">
          <Header />
          <div className="m-a flex w-2/3 items-center justify-between py-4">
            <SearchSideBar />
            <div className=" w-5/6">
              <RestaurantCard />
            </div>
          </div>
        </header>
      </div>
    </>
  );
}
