import { PrismaClient } from '@prisma/client';
import Header from './components/Header';
import RestaurantCard from './components/RestaurantCard';
import SearchSideBar from './components/SearchSideBar';

const prisma = new PrismaClient();

const fetchRestaurantByCity = (city: string | undefined) => {
  const select = {
    id: true,
    name: true,
    main_image: true,
    price: true,
    cuisine: true,
    location: true,
    slug: true,
  };

  if (!city) return prisma.restaurant.findMany({ select });

  return prisma.restaurant.findMany({
    where: {
      location: {
        name: {
          equals: city.toLowerCase(),
        },
      },
    },
    select,
  });
};

export default async function Search({
  searchParams,
}: {
  searchParams: { city: string };
}) {
  const restaurants = await fetchRestaurantByCity(searchParams.city);

  return (
    <>
      <div className="bg-gradient-t0-r from-[#of1f47] to-[#5f6984]">
        <header className="h-24 bg-gradient-to-r from-[#142b3f] to-[#192854] p-2">
          <Header />
          <div className="m-a flex w-2/3 items-center justify-between py-4">
            <SearchSideBar />
            <div className=" w-5/6">
              {restaurants.length ? (
                <>
                  {restaurants.map((restaurant) => (
                    <RestaurantCard
                      key={restaurant.id}
                      restaurant={restaurant}
                    />
                  ))}
                </>
              ) : (
                <p className="text-center text-lg font-medium">
                  Sorry, no restaurant found in this area
                </p>
              )}
            </div>
          </div>
        </header>
      </div>
    </>
  );
}
